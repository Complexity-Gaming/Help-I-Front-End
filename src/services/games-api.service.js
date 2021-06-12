import axios from 'axios'

class GamesApiService {

    http = null
    apiKey = 'fecf4feeffa64e4da682e7d268612ce5'

    constructor() {
        this.http = axios.create({
            baseURL: 'https://newsapi.org/v2',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    getGamesFor(genreId) {
        return this.http.get(`/top-headlines?sources=${genreId}&apiKey=${this.apiKey}`)
    }

}

export default new GamesApiService()