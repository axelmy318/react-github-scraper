import React, { useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext } from '../..'
import '../index.css'

const Size = ({ prefix, label }) => {
    const CONTENT_KEY = `repository`
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
            <div className='github-scraper-component-content' style={{fontSize: '130%'}}>{prefix && prefix}{formatBytes(content[CONTENT_KEY].data.size)}</div>
        </>}
    </div>)
}


const formatBytes = (bytes, decimals = 1, space = true) => {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    
    if (bytes === 0 || bytes === null || bytes === undefined) return '0' + (space ? " " : "") + sizes[0];

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    let result = parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + (space ? " " : "") + sizes[i]

    return result === 'NaNundefined' ? '0' + (space ? " " : "") + sizes[0] : result;
}

Size.defaultProps = {
    label: null,
    prefix: "",
}

export default Size