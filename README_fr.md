
# react-github-scraper 👋

Inclut plusieurs componsants customisables pour automatiquement charger et afficher des donner de l'API de Github, en donnant simplement le dépôt ciblé.

## Installation
`npm i react-github-scraper`

## Démo & API 👀

[https://axelmy-projects-showcase.firebaseapp.com/react-github-scraper](https://axelmy-projects-showcase.firebaseapp.com/react-github-scraper) (...avec du code 😉)

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

## Utilisation 💻

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


## Configuration

Pour savoir quel est le dépôt ciblé, vous devez enveloppez vos composants dans `<GithubScraper>` et donner à celui-ci le `username`, `repository` et optionnellement `branch` comme props


## Screenshots
Here is what you can get by mixing some of your own CSS with the example in the "Usage" section

![screenshot1](https://i.imgur.com/AqfIWku.png)