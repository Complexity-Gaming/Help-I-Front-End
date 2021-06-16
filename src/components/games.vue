<template>

  <section>
    <h1 class="gameChooseTittle">Elige tu juego</h1>
    <v-row align="center" justify="center">
      <v-col cols="6" sm="3" v-for="game in games" :key="game.id">
        <div>
          <v-img @click="navigateToGameMenu(game.id)" class="gameImage" v-bind:src="game.coverUrl"></v-img>
        </div>
        <h2 class="gameTitle">{{game.name}}</h2>
      </v-col>
    </v-row>
  </section>

</template>

<script>
import HelpiApiService from '../services/helpi-api-service';
export default {
  name: "games",

  data() {
    return {
      games: [],
      errors: [],
      helpiApi: HelpiApiService
    }
  },
  mounted() {
    this.getGames();
  },

  methods: {
    navigateToGameMenu(id){
      this.$router.push({name: 'game-menu', params: { id: id}});
    },

    getGames(){
      this.helpiApi.getGamesApi()
      .then(response => {
        this.games = response.data;
      })
      .catch((e) => {
        console.log(e);
      })
    },
  }

};

</script>

<style scoped>

.gameImage {
  width: fit-content;
  border-radius: inherit;
  margin-bottom: 5%;
}

.gameTitle {
  text-align: center;
  font-size: 100%;
  color: #666173;
  margin-bottom: 10%;
}

.gameChooseTittle {
  font-size: 300%;
  font-weight: bolder;
  color: #139028;
  text-align: center;
  margin: 5%;
}

</style>