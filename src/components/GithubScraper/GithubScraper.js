import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { GithubScraperSourceContext, GithubScraperContext } from '../../.'
import GithubAPI from '../GithubScraper/GithubAPI'
import 'moment/dist/locale/fr'

const GithubScraper = ({ username, repository, branch, children, lang }) => {
    const [ content, setContent ] = useState({
        repository: null,
        languages: null,
        contributors: null,
        user: null,
        commits: null,
    })

    useEffect(() => {
        if(lang) {
            moment.locale(lang)
        } 
    }, [lang])

    useEffect(() => {
        setContent({
            repository: null,
            languages: null,
            contributors: null,
            user: null,
            commits: null,
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
    branch: '',
}

export default GithubScraper