import React, { createContext } from 'react'

const GithubScraperSourceContext = createContext({username: '', repository: '', branch: ''})

export default GithubScraperSourceContext