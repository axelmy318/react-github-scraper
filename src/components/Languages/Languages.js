import React, { useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext } from '../../.'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Languages = ({ maxLanguages }) => {
    const CONTENT_KEY = `languages`
    let {content, setContentKey, githubAPI} = useContext(GithubScraperContext)
    githubAPI.setContentKey(CONTENT_KEY)

    if(content[CONTENT_KEY] === undefined || content[CONTENT_KEY] === null)
        fetchURL(githubAPI.getEndpoint(), (response) => fillData(response))

    const fillData = response => {
        setContentKey(CONTENT_KEY, {...response})
    }

    const getPieChartData = () => {
        const labels = [], data = [], backgroundColor = [], borderColor = []

        if(maxLanguages === null)
            maxLanguages = Object.keys(content.languages.data).length
        else
            maxLanguages = Math.min(maxLanguages, Object.keys(content.languages.data).length)

        for(let i = 0; i < maxLanguages; i++) {
            let r = Math.floor(Math.random() * 255), g = Math.floor(Math.random() * 255), b = Math.floor(Math.random() * 255);
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

    return (<>
        {content[CONTENT_KEY] !== null && content[CONTENT_KEY].success && <>
            <Pie data={getPieChartData()} width={'100px'} />
            {Object.keys(content[CONTENT_KEY].data).map(language => <p key={language}>{language} = {content[CONTENT_KEY].data[language]}</p>)}
        </>}
    </>)
}

Languages.defaultProps = {
    maxLanguages: 7
}

export default Languages