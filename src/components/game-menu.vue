<template>
  <v-card>
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title>
          <span class="headline"> {{game.name}} </span>
        </v-card-title>
        <v-card-text>{{game.summary}}</v-card-text>
        <v-card-actions>
          <v-btn text>
            Action
          </v-btn>
        </v-card-actions>
      </div>
      <v-avatar class="ma-3" width=50% height=auto tile>
        <v-img class="gameImage" v-bind:src="game.coverUrl"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
import HelpiApiService from '../services/helpi-api-service';
export default {

  name: "game-menu",

  data() {
    return {
      game: {
        id: 0,
        name: '',
        summary: '',
        coverUrl: ''
      }
    }
  },

  methods: {
    retrieveGame(id) {
      HelpiApiService.getGamesBy(id)
      .then((response) =>{
        this.game = response.data.resource;
      })
      .catch(e => {
        console.log(e);
      })
    }
  },

  created() {
    this.retrieveGame(this.$route.params.id);
  }

};

</script>

<style scoped>
.gameImage {
  width: fit-content;
  border-radius: inherit;
  margin-bottom: 5%;
}
</style>