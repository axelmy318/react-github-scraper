import React, { useContext } from 'react'
import {GithubScraperContext} from '../.'

const Repository = ({ children }) => {
    const { GSContext, setGSContext } = useContext(GithubScraperContext)

    const URL = `https://api.github.com/repos/${GSContext.username}/${GSContext.repository}/repos`

    if(languages === null)
        fetchURL(URL, (val) => setGSContext({data: val.data, ...GSContext}))
        
    return (<>
        {children}
    </>)
}

export default Repository