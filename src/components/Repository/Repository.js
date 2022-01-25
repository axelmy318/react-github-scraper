import React, { useContext } from 'react'
import { GithubScraperContext } from '..'

const Repository = () => {
    const [GSContext, setGSContext] = useContext(GithubScraperContext)

    const [languages, setLanguages] = useState(null)
    const URL = `https://api.github.com/repos/${gsContext.username}/${gsContext.repository}/repos`

    if(languages === null)
        fetchURL(URL, setLanguages)
        
    return (<>
        {console.log(GSContext)}
    </>)
}

export default Repository