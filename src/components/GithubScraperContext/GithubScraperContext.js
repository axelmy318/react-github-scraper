import React, { createContext } from 'react'

const GithubScraperContext = createContext({username: '', repository: '', branch: ''})

export default GithubScraperContext