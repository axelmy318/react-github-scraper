# react-github-scraper 👋

Provides multiple customizable components to automatically load and display GitHub repositories data by just passing the targeted repository!

## Installation
`npm i react-github-scraper`

## Demo 👀

[https://axelmy-projects-showcase.firebaseapp.com/react-github-scraper](https://axelmy-projects-showcase.firebaseapp.com/react-github-scraper) (...with code 😉)


## Usage 💻

```javascript
import GithubScraper, { Languages, StargazersCount } from 'react-github-scraper';

const Example = () => {
    return (
        <GithubScraper 
            username='axelmy318' 
            repository='react-github-scraper' 
            branch='master'
        >
            <Languages label='Languages' />
            <StargazersCount label='Star count' />
        </GithubScraper>
    )
}

export default Example
```

## API ✔
Coming soon
