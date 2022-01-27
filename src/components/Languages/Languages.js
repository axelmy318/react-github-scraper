import React, { useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext } from '../../.'
import '../index.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Languages = ({ label, maxDisplayed }) => {
    const CONTENT_KEY = `languages`
    let {content, setContentKey, githubAPI} = useContext(GithubScraperContext)
    githubAPI.setContentKey(CONTENT_KEY)

    if(content[CONTENT_KEY] === undefined || content[CONTENT_KEY] === null) 
        fetchURL(githubAPI.getEndpoint(), (response) => fillData(response))

    const fillData = response => {
        setContentKey(CONTENT_KEY, {...response})
    }

    const clamp = (num, min, max) => {
        return num <= min 
            ? min 
            : num >= max 
            ? max 
            : num    
    }

    const getRandomColor = () => {
        let colors = [0, 0, 0]

        let clamps = {
            main: [250, 255],
            secondary: [0, 255]
        }

        let mainColor = (Math.round(Math.random() * colors.length-1))
        
        let newColors = colors.map((color, index) => {
            if(index === mainColor)
                return Math.round(Math.random() * clamps.main[1] - clamps.main[0]) + clamps.main[0]
            else   
                return Math.round(Math.random() * clamps.secondary[1] - clamps.secondary[0]) + clamps.secondary[0]
        })

        return newColors
    }

    const getPieChartData = () => {
        const labels = [], data = [], backgroundColor = [], borderColor = []

        if(maxDisplayed === null)
            maxDisplayed = Object.keys(content.languages.data).length
        else
            maxDisplayed = Math.min(maxDisplayed, Object.keys(content.languages.data).length)

        for(let i = 0; i < maxDisplayed; i++) {
            let [r, b, g] = getRandomColor()
            let currLabel = Object.keys(content.languages.data)[i]
            labels.push(currLabel)
            data.push(content.languages.data[currLabel])
            backgroundColor.push(`rgba(${r}, ${g}, ${b}, .2)`)
            borderColor.push(`rgb(${r}, ${g}, ${b})`)
        }

        return {
            labels,
            datasets: [
                {
                    label: 'Bytes of code',
                    data,
                    backgroundColor,
                    borderColor,
                }
            ]
        }
    }

    return (<div className='github-scraper-component component-languages'>
        {content[CONTENT_KEY] !== null && content[CONTENT_KEY].success && <>
            {label && <div className='github-scraper-component-label'>{label}</div>}
            <div className='github-scraper-component-content'><Pie data={getPieChartData()} /></div>
        </>}
    </div>)
}

Languages.defaultProps = {
    label: null,
    maxDisplayed: 7,
}

export default Languages