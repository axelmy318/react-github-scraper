import React, { useState, useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperSourceContext } from '../GithubScraperContext'

const Languages = () => {
    let GSSource = useContext(GithubScraperSourceContext)
    console.log(GSSource)

    const [languages, setLanguages] = useState(null)
    const URL = `https://api.github.com/repos/${GSSource.username}/${GSSource.repository}/languages`

    if(languages === null)
        fetchURL(URL, setLanguages)

    return (<>
        {languages !== null && languages.success && <>
            {Object.keys(languages.data).map(language => <p key={language}>{language} = {languages.data[language]}</p>)}
        </>}
    </>)
}

export default Languages