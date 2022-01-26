import React, { useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext } from '../..'
import '../index.css'

const Topics = ({ label }) => {
    const CONTENT_KEY = `repository`
    let {content, setContentKey, githubAPI} = useContext(GithubScraperContext)
    githubAPI.setContentKey(CONTENT_KEY)

    if(content[CONTENT_KEY] === undefined || content[CONTENT_KEY] === null)
        fetchURL(githubAPI.getEndpoint(), (response) => fillData(response))

    const fillData = response => {
        setContentKey(CONTENT_KEY, {...response})
    }

    const sendToTopic = topic => {
        window.open(`https://www.github.com/topics/${topic}`, '_blank').focus();
    }

    return (<div className='github-scraper-component component-topics'>
        {content[CONTENT_KEY] !== null && content[CONTENT_KEY].success && <>
            {label && <div className='github-scraper-component-label'>{label}</div>}
            <div className='github-scraper-component-content' style={{fontSize: '130%'}}>
                { content[CONTENT_KEY].data.topics.length > 0
                ? content[CONTENT_KEY].data.topics.map(topic => <span className='github-scraper-topic clickable' onClick={() => sendToTopic(topic)}>{topic}</span>)
                : <i>This repository has no topics</i>
            }
            </div>
        </>}
    </div>)
}

Topics.defaultProps = {
    label: null,
}

export default Topics