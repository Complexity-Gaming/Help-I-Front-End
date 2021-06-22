import axios from 'axios'

class HelpiApiService {
    http = null

    constructor() {
        this.http = axios.create({
            baseURL: `https://help-i-api.azurewebsites.net/api`,
            headers: {
                'accept': 'application/json'
            }
        })
    }

    getGamesApi(){
        return this.http.get(`/games`)
    }

    getGamesBy(gameId){
        return this.http.get(`/games/${gameId}`)
    }

    getPerfilPlayerBy(playerId){
        return this.http.get(`/players/${playerId}`)
    }

}

export default new HelpiApiService();