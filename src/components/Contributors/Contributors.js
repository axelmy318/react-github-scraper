import React, { useContext, useState } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext } from '../..'
import '../index.css'

const Contributors = ({ label, maxDisplayed }) => {
    const CONTENT_KEY = `contributors`
    let {content, setContentKey, githubAPI} = useContext(GithubScraperContext)
    githubAPI.setContentKey(CONTENT_KEY)

    const [showMore, setShowMore] = useState(false)

    if(content[CONTENT_KEY] === undefined || content[CONTENT_KEY] === null)
        fetchURL(githubAPI.getEndpoint(), (response) => fillData(response))

    const fillData = response => {
        setContentKey(CONTENT_KEY, {...response})
    }

    const getContributorsWithLimit = () => {
        if(maxDisplayed === null || showMore)
            maxDisplayed = content[CONTENT_KEY].data.length
        else
            maxDisplayed = Math.min(maxDisplayed, content[CONTENT_KEY].data.length)

        return content[CONTENT_KEY].data.slice(0, maxDisplayed)
    }

    return (<div className='github-scraper-component component-contributors'>
        {content[CONTENT_KEY] !== null && content[CONTENT_KEY].success && <>
            {label && <div className='github-scraper-component-label'>{label}</div>}
            <div className='github-scraper-component-content'>
                {getContributorsWithLimit().map(contributor => {
                    return <ContributorMiniature data={contributor} />
                })}

                {getContributorsWithLimit().length < content[CONTENT_KEY].data.length && <>
                    <button onClick={() => setShowMore(true)}>Show more</button>
                </>}
            </div>
        </>}
    </div>)
}

Contributors.defaultProps = {
    label: null,
    maxDisplayed: 7,
}

const ContributorMiniature = ({ data }) => {
    return (<>
        <div key={data.id} className='contributor-miniature'>
            <div className='contributor-miniature-image'><img src={data.avatar_url} width={32} /></div>
            <div className='contributor-miniature-username'>{data.login}</div>
        </div>
    </>)
}

export default Contributors