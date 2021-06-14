<template>

  <section>
    <h1 class="gameChooseTittle">Elige tu juego</h1>
    <v-row align="center" justify="center">
      <v-col cols="6" sm="3">
        <div>
          <v-img @click="navigateToGameMenu" class="gameImage" src="//images.igdb.com/igdb/image/upload/t_1080p/co1vce.jpg"></v-img>
        </div>
        <h2 class="gameTitle">Counter Strike</h2>
      </v-col>
      <v-col cols="6" sm="3">
        <div>
          <v-img @click="navigateToGameMenu" class="gameImage" src="//images.igdb.com/igdb/image/upload/t_1080p/co1y5n.jpg"></v-img>
        </div>
        <h2 class="gameTitle">Dota 2</h2>
      </v-col>
      <v-col cols="6" sm="3">
        <div>
          <v-img @click="navigateToGameMenu" class="gameImage" src="//images.igdb.com/igdb/image/upload/t_1080p/co1wzo.jpg"></v-img>
        </div>
        <h2 class="gameTitle">Apex</h2>
      </v-col>
      <v-col cols="6" sm="3">
        <div>
          <v-img @click="navigateToGameMenu" class="gameImage" src="//images.igdb.com/igdb/image/upload/t_1080p/co20o8.jpg"></v-img>
        </div>
        <h2 class="gameTitle">Warzone</h2>
      </v-col>
    </v-row>
  </section>

</template>

<script>
export default {
  name: "games",
  methods: {
    navigateToGameMenu(){
      this.$router.push({name: 'game-menu'});
    }
  }
}

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