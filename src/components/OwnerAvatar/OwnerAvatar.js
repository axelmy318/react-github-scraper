import React, { useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext } from '../..'
import '../index.css'

const OwnerAvatar = ({ prefix, label, imageSize }) => {
    const CONTENT_KEY = `user`
    let {content, setContentKey, githubAPI} = useContext(GithubScraperContext)
    githubAPI.setContentKey(CONTENT_KEY)

    if(content[CONTENT_KEY] === undefined || content[CONTENT_KEY] === null)
        fetchURL(githubAPI.getEndpoint(), (response) => fillData(response))

    const fillData = response => {
        setContentKey(CONTENT_KEY, {...response})
    }

    return (<div className='github-scraper-component component-pushedat'>
        {content[CONTENT_KEY] !== null && content[CONTENT_KEY].success && <>
            {label && <div className='github-scraper-component-label'>{label}</div>}
            <div className='github-scraper-component-content' style={{fontSize: '130%'}}><img src={content[CONTENT_KEY].data.avatar_url} width={imageSize} /></div>
        </>}
    </div>)
}

OwnerAvatar.defaultProps = {
    label: null,
    prefix: "",
    size: imageSize
}

export default OwnerAvatar