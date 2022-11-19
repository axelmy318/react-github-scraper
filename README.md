
# react-github-scraper 👋

Provides multiple customizable components to automatically load and display data from the Github API by just passing the targeted repository!

## Installation
`npm i react-github-scraper`

## Demo & API 👀

[https://axelmry.com/react-github-scraper](https://axelmry.com/react-github-scraper) (...with code 😉)

## Components

- GithubScraper
    - Repository related
        - Contributors
        - ForksCount
        - Languages
        - PushedAt
        - Size
        - StargazersCount
        - Topics
        - WatchersCount
        - Commits
    - User related
        - MemberSince
        - OwnerAvatar
        - OwnerFollowersCount
        - PublicReposCount

## Usage 💻

```javascript
import GithubScraper, { 
    Languages, 
    StargazersCount, 
    Topics, PushedAt, 
    Contributors, 
    Size 
} from 'react-github-scraper';

const Example = () => {
    return (
        <GithubScraper 
            username='axelmy318' 
            repository='react-github-scraper' 
            branch='master' // default 'main'
            lang='en' // default 'en'. Defines the language used for dates and such...
        >
            <StargazersCount prefix="⭐&nbsp;" label={'Stargazers count'} />
            <Languages label={'Languages'} />
            <Topics label={'Topics'} />
            <Contributors label={'Contributors'} />
            <PushedAt label={'Last push'} />
            <Size label={'Size'} />
        </GithubScraper>
    )
}


export default Example
```


## Configuration

To know what is the targeted repository, you have to wrap your components into `<GithubScraper>` and pass it the `username`, `repository` and optionally `branch` as props.


## Screenshots
Here is what you can get by mixing some of your own CSS with the example in the "Usage" section

![screenshot1](https://i.imgur.com/AqfIWku.png)