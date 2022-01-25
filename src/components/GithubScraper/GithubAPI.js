class GithubAPI {
    BASE_LINK = {
        repos: `https://api.github.com/repos/`
    }
    username = ''
    repository = ''
    branch = ''

    constructor(username, repository, branch) {
        this.username = username
        this.repository = repository
        this.branch = branch
    } 

    getRepoLanguages = (username, repository, branch)

}

export default GithubAPI