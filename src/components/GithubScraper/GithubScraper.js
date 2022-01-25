import React, { useState } from 'react'
import { GithubScraperSourceContext, GithubScraperContext } from '../../.'
import GithubAPI from '../GithubScraper/GithubAPI'

const GithubScraper = ({ username, repository, branch, children }) => {
    const [ content, setContent ] = useState({
        repository: null,
        languages: null,
    })
    
    const setContentKey = (key, value) => {
        let newContent = content
        newContent[key] = value
        setContent({...newContent})
    }

    return (<GithubScraperSourceContext.Provider value={{username, repository, branch}}>
        <GithubScraperContext.Provider value={{
            content, 
            setContentKey, 
            githubAPI: new GithubAPI(username, repository, branch)
        }}>
            {children}
        </GithubScraperContext.Provider>
    </GithubScraperSourceContext.Provider>)
}

GithubScraper.defaultProps = {
    username: '',
    repository: '',
    branch: ''
}

export default GithubScraper