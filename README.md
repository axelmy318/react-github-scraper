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

## Screenshots
Here is what you can get by mixing some of your own CSS with the example in the "Usage" section

![screenshot1](https://i.imgur.com/AqfIWku.png)

## API ✔
Coming soon
