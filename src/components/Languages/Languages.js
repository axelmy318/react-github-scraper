import React, { useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext } from '../../.'
import '../index.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Gradient from 'javascript-color-gradient'

ChartJS.register(ArcElement, Tooltip, Legend);

const Languages = ({ label, maxDisplayed, translucid, gradientColors, borderColor }) => {
    const CONTENT_KEY = `languages`
    let {content, setContentKey, githubAPI} = useContext(GithubScraperContext)
    githubAPI.setContentKey(CONTENT_KEY)

    if(content[CONTENT_KEY] === undefined || content[CONTENT_KEY] === null) 
        fetchURL(githubAPI.getEndpoint(), (response) => fillData(response))

    const fillData = response => {
        setContentKey(CONTENT_KEY, {...response})
    }

    const getColorGradient = (nbOutput) => {
        let colors = []
        if(nbOutput > gradientColors.length) {
            colors.push(gradientColors[0])
            colors.push(...(new Gradient()
                .setColorGradient(...gradientColors)
                .setMidpoint(nbOutput - 2)
                .getColors()))
            colors.push(gradientColors[1])
        } else 
            colors = gradientColors
        
        return colors
    } 

    const getPieChartData = () => {
        const labels = [], data = [], backgroundColors = [], borderColors = []

        maxDisplayed = maxDisplayed ? Math.min(maxDisplayed, Object.keys(content.languages.data).length) : Object.keys(content.languages.data).length

        const colors = getColorGradient(maxDisplayed)
        
        for(let i = 0; i < maxDisplayed; i++) {
            let currLabel = Object.keys(content.languages.data)[i]
            labels.push(currLabel)
            data.push(content.languages.data[currLabel])

            let hexColor = colors[i]
            backgroundColors.push(translucid ? `${hexColor}6e` : `${hexColor}`)
            borderColors.push(borderColor ?? `${hexColor}`)
        }

        return {
            labels,
            datasets: [
                {
                    label: 'Bytes of code',
                    data,
                    backgroundColor: backgroundColors,
                    borderColor: borderColors,
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
    translucid: true,
    gradientColors: ["#91e0ff", "#e9446a", "#ff0000"],
    borderColor: null,
}

export default Languages