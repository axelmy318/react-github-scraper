import React from 'react'
import GithubScraperContext from '../GithubScraperContext'

const Languages = () => {
    let gsContext = useContext(GithubScraperContext)

    return (<>
        {console.log(gsContext)}
    </>)
}

export default Languages