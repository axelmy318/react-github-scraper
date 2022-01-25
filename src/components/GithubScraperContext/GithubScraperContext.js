import React, { createContext } from 'react'

const GithubScraperContext = createContext({username: '', repository: '', branch: ''})

export const IsLoaded = () => {
    return GithubScraperContext
}

export default GithubScraperContext