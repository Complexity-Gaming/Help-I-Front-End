<template>
  <v-app>
    <v-app-bar app dark color=#666173>
      <v-toolbar-title>HelpI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items :id = 1>
        <v-btn text to="/">home</v-btn>
        <v-btn text to="/games">games</v-btn>
        <v-btn text to="/about">about</v-btn>
        <v-btn text to="/profile-player/:id">perfil</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer dark padless>
      <v-card class="text-center" width=100% color=#666173>
        <v-card-text>
          <v-btn v-for="icon in icons"
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
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),

};

</script>

<style scoped>


</style>