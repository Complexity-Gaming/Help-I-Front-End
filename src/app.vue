<template>
  <v-app light>

    <v-app-bar fixed app light clipped-left color=#666785 class="elevation-2">
      <v-app-bar-nav-icon @click="toggleDrawer" class="white--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="white--text">Help-I</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <h1 id="GameChooseTittle" class="text-center">Elige tu juego</h1>
      <v-container fluid>
        <GameContent :articles="articles"></GameContent>
      </v-container>
    </v-main>

    <v-footer
        dark
        padless

    >
      <v-card
          flat
          tile
          class="flex"
      >
        <v-card-text class="text-xl-center">
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text text-xl-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-app>
</template>

<script>
import GamesApiService from "@/services/games-api.service";
import GameContent from "@/components/game-content";

export default {
  name: 'App',
  components: {
    GameContent
  },


  data () {
    return {
      drawer: false,
      articles: [],
      errors: [],
      gamesApi: GamesApiService,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }
  },
  created() {
    this.getGamesFor('techcrunch');
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    getGamesFor(genreId) {
      this.gamesApi.getGamesFor(genreId)
          .then(response => {
            this.articles = response.data.articles;
            console.log(`games: ${this.articles}`);
          })
          .catch(e => {
            this.errors.push(e);
          })
    },

  }
};
</script>

<style scoped>
#GameChooseTittle {
  font-family: "Roboto";
  font-size: 6rem;
  font-weight: 700;
  color: #139028;
  margin: 80mm;
  text-align-all: center;

}

</style>