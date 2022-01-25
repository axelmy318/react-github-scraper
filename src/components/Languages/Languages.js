import React, { useState, useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext, GithubScraperSourceContext, GithubAPI } from '../.'

const Languages = () => {
    const CONTENT_KEY = `languages`
    let GSSource = useContext(GithubScraperSourceContext)
    let {content, setContentKey} = useContext(GithubScraperContext)
    console.log(GSSource)
    console.log(useContext(GithubScraperContext ))
    
    const URL = `https://api.github.com/repos/${GSSource.username}/${GSSource.repository}/languages`

    if(content[CONTENT_KEY] === undefined || content[CONTENT_KEY] === null)
        fetchURL(URL, (response) => fillData(response))

    const fillData = response => {
        setContentKey(CONTENT_KEY, {...response})
    }

    return (<>
        <button>Button</button>
        {content[CONTENT_KEY] !== null && content[CONTENT_KEY].success && <>
            {Object.keys(content[CONTENT_KEY].data).map(language => <p key={language}>{language} = {content[CONTENT_KEY].data[language]}</p>)}
        </>}
    </>)
}

export default Languages