import React, { useContext } from 'react'
import { fetchURL } from '../../functions/fetchURL'
import { GithubScraperContext } from '../..'
import moment from 'moment'
import '../index.css'

const PushedAt = ({ prefix, label, showAsDate }) => {
    const CONTENT_KEY = `repository`
    let {content, setContentKey, githubAPI} = useContext(GithubScraperContext)
    githubAPI.setContentKey(CONTENT_KEY)

    if(content[CONTENT_KEY] === undefined || content[CONTENT_KEY] === null)
        fetchURL(githubAPI.getEndpoint(), (response) => fillData(response))

    const fillData = response => {
        setContentKey(CONTENT_KEY, {...response})
    }

    const convertDate = (date) => {
        let d = new Date(date)
        return d.toLocaleString()
    }

    return (<div className='github-scraper-component component-pushedat'>
        {content[CONTENT_KEY] !== null && content[CONTENT_KEY].success && <>
            {label && <div className='github-scraper-component-label'>{label}</div>}
            <div className='github-scraper-component-content' style={{fontSize: '130%'}}>
                {prefix && prefix}
                {showAsDate ? convertDate(content[CONTENT_KEY].data.pushed_at) : moment(content[CONTENT_KEY].data.pushed_at).fromNow()}
                </div>
        </>}
    </div>)
}

PushedAt.defaultProps = {
    label: null,
    prefix: "",
    showAsDate: false,
}

export default PushedAt