import React, { useState, useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import GithubScraperContext from '../GithubScraperContext'

const Languages = () => {
    let gsContext = useContext(GithubScraperContext)
    console.log('test')
    console.log(gsContext)

    const [languages, setLanguages] = useState(null)

    if(languages === null)
        fetchURL(`https://api.github.com/repos/${gsContext.username}/${gsContext.repository}/languages`)
            .then(response => {
                if(response.success)
                    setLanguages(response.data)
            })

    return (<>
        {languages && <>
            {Object.keys(languages).map(language => <p>{language} = {languages[language]},</p>)}
        </>}
    </>)
}

export default Languages