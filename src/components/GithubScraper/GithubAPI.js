class GithubAPI {
    LINK_BOOK = {
        base: 'https://api.github.com',
        repos: {
            base: '/repos',
            repository: '/__USERNAME__/__REPOSITORY__',
            languages: '/__USERNAME__/__REPOSITORY__/languages',
        },
    }
    username = ''
    repository = ''
    branch = ''
    contentKey=''

    constructor(username, repository, branch) {
        this.username = username
        this.repository = repository
        this.branch = branch
    } 

    setContentKey = key => {
        this.contentKey = key
    }

    replaceWithUserData = (target) => {
        target = target.replace('__USERNAME__', this.username)
        target = target.replace('__REPOSITORY__', this.repository)
        target = target.replace('__BRANCH__', this.branch)
        return target
    }
    getEndpoint = () => {
        let foundEndpoint = null
        let inSection = null

        Object.keys(this.LINK_BOOK).map(section => {
            if(typeof this.LINK_BOOK[section] === typeof {}){
                Object.keys(this.LINK_BOOK[section]).map(endpoint => {
                    if(endpoint === this.contentKey){
                        inSection = section
                        foundEndpoint = endpoint
                    }
                })
            }
        })
        
        const url = `${this.LINK_BOOK.base}${this.LINK_BOOK[inSection].base}${this.LINK_BOOK[inSection][foundEndpoint]}`

        return this.replaceWithUserData(url)
    }
}

export default GithubAPI