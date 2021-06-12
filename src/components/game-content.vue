<template>
  <v-row>
    <v-col
        v-for="article in articles"
        :key="article.title"
        class="d-flex child-flex"
        cols="3"
    >
      <v-card>
        <v-img height="350px" v-bind:src="article.urlToImage"></v-img>
        <v-card-title class="text-h6">
          {{article.title}}
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "game-content",
  props: {
    articles: Array
  }
}
</script>

<style scoped>

</style>
