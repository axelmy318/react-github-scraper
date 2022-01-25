import React, { useState, useContext } from 'react'
import { GithubScraperSourceContext, GithubScraperContext } from '../.'

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
        <GithubScraperContext.Provider value={{content, setContentKey}}>
            {children}
        </GithubScraperContext.Provider>
    </GithubScraperSourceContext.Provider>)
}

export default GithubScraper