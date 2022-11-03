import React, { useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext } from '../../.'
import '../index.css'

const Commits = ({ label, maxDisplayed, commitCallback }) => {
    const CONTENT_KEY = `commits`
    let {content, setContentKey, githubAPI} = useContext(GithubScraperContext)
    githubAPI.setContentKey(CONTENT_KEY)

    if(content[CONTENT_KEY] === undefined || content[CONTENT_KEY] === null) 
        fetchURL(githubAPI.getEndpoint(), (response) => fillData(response))

    const fillData = response => {
        setContentKey(CONTENT_KEY, {...response})
    }

    return (<div className='github-scraper-component component-commits'>
        {content[CONTENT_KEY] !== null && content[CONTENT_KEY].success && <>
            {label && <div className='github-scraper-component-label'>{label}</div>}
            <div className='github-scraper-component-content'>{content[CONTENT_KEY].data.map((commit) => commitCallback(commit))}</div>
        </>}
    </div>)
}

Commits.defaultProps = {
    label: null,
    maxDisplayed: 7,
    commitCallback: () => {}
}

export default Commits