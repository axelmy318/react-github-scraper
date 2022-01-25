import React, { createContext } from 'react'

const GithubScraperContext = createContext({
    content: {},
    setContentKey: () => {}
})

export default GithubScraperContext