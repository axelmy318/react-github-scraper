import React, { useEffect, useState } from 'react'
import { GithubScraperSourceContext, GithubScraperContext } from '../../.'
import GithubAPI from '../GithubScraper/GithubAPI'

const GithubScraper = ({ username, repository, branch, children }) => {
    const [ content, setContent ] = useState({
        repository: null,
        languages: null,
        contributors: null,
        user: null
    })

    useEffect(() => {
        setContent({
            repository: null,
            languages: null,
            contributors: null,
            user: null
        })
    }, [username, repository, branch])
    
    const setContentKey = (key, value) => {
        let newContent = content
        newContent[key] = value
        setContent({...newContent})
    }

    return (<span className='github-scraper'>
        <GithubScraperSourceContext.Provider value={{username, repository, branch}}>
            <GithubScraperContext.Provider value={{
                content, 
                setContentKey, 
                githubAPI: new GithubAPI(username, repository, branch)
            }}>
                {children}
            </GithubScraperContext.Provider>
        </GithubScraperSourceContext.Provider>
    </span>)
}

GithubScraper.defaultProps = {
    username: '',
    repository: '',
    branch: ''
}

export default GithubScraper