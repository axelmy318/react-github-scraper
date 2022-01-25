import React, { useContext, createContext } from 'react'

export const GithubScraperSourceContext = createContext({username: '', repository: '', branch: ''})

const GithubScraperContext = createContext({
    content: {
        repository: {},
        languages: {}
    },
    setContent: () => {}
})

export const GithubScraper = ({ username, repository, branch, children }) => {
    const { content, setContent } = useContext(GithubScraperContext)

    console.log(GSContext)

    return (<GithubScraperSourceContext.Provider value={{username, repository, branch}}>
        {children}
    </GithubScraperSourceContext.Provider>)
}

export const IsLoaded = () => {
    return GithubScraperContext
}

export default GithubScraperContext