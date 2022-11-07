
# react-github-scraper 👋

Provides multiple customizable components to automatically load and display data from the Github API by just passing the targeted repository!

## Installation
`npm i react-github-scraper`

## Demo & API 👀

[https://axelmy-projects-showcase.firebaseapp.com/react-github-scraper](https://axelmy-projects-showcase.firebaseapp.com/react-github-scraper) (...with code 😉)

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

To know what is the targeted repository, you have to wrap your components into `<GithubScraper>` and pass it the `username`, `repository`, and optionally `branch` as props.


### Common props
- `label`: every components has it. It defines the title written above the data
- `prefix`: some components allow you to use a prefix, to put right before the data. See the `<StargazersCount />` component for some examples.


## Screenshots
Here is what you can get by mixing some of your own CSS with the example in the "Usage" section

![screenshot1](https://i.imgur.com/AqfIWku.png)


## Todos
- [x] Create a wrapper to provide the github repository only once
- [x] Create a class shared to all the components to prevent fetching the same data twice
- [x] List repository languages
- [x] List repository topics
- [x] List repository contributors
- [x] Display repository counts (stargazers, watchers, forks)
- [ ] Display repository dates (last pushed, last commit, ...)
- [ ] Provide theme to the `<GithubScraper>` component so that it automatically applies to all children
- [ ] Create a parameter to not render the component if there is no data (IE: don't render `<Topics />` if there are none)