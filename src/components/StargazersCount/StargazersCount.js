import React, { useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext } from '../..'
import '../index.css'

const StargazersCount = ({ prefix, label }) => {
    const CONTENT_KEY = `repository`
    let {content, setContentKey, githubAPI} = useContext(GithubScraperContext)
    githubAPI.setContentKey(CONTENT_KEY)

    if(content[CONTENT_KEY] === undefined || content[CONTENT_KEY] === null)
        fetchURL(githubAPI.getEndpoint(), (response) => fillData(response))

    const fillData = response => {
        setContentKey(CONTENT_KEY, {...response})
    }

    return (<div className='github-scraper-component component-stargazerscount'>
        {content[CONTENT_KEY] !== null && content[CONTENT_KEY].success && <>
            {label && <div className='github-scraper-component-label'>{label}</div>}
            <div className='github-scraper-component-content' style={{fontSize: '130%'}}>{prefix && prefix}{content[CONTENT_KEY].data.stargazers_count}</div>
        </>}
    </div>)
}

StargazersCount.defaultProps = {
    label: null,
    prefix: "⭐",
}

export default StargazersCount