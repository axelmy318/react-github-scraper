import React, { createContext } from 'react'

const GithubScraperContext = createContext({
    content: {},
    setContentKey: () => {},
    githubAPI: null
})

export default GithubScraperContext