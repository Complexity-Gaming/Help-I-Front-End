<template>
  <v-container>
    <section style="text-align: center">
      <h2>Mis training Materials </h2>
    </section>

    <section class="training" >
      <div class="container" style="background-color: #666173; margin: 30px" v-for="trainingMaterial in trainingMaterials" :key="trainingMaterial.id">
        <article>
          <img class="item-image" :src="trainingMaterial.videoUri">
        </article>
        <article style="text-align: right; color: #FFFFFF">
          <h3>{{trainingMaterial.trainingMaterialId}}</h3>
          <h5> Fecha de publicacion: {{ trainingMaterial.publishedDate }}
            Precio: {{trainingMaterial.price}} {{trainingMaterial.currency}}</h5>
        </article>
      </div>
    </section>
  </v-container>
</template>

<script>
import HelpiApiService from "@/services/helpi-api-service";
export default {
  name: "material",

  data() {
    return {

      experts: [],

      trainingMaterials: []

    }
  },
  computed: {
    currentUser() {
      console.log(this.$store.state.auth.user);
      return this.$store.state.auth.user;
    },
    currentUserFullName() {
      return `${this.currentUser.firstName} ${this.currentUser.lastName}`;
    }
  },

  methods: {

    retrieveTrainingMaterial(){
      HelpiApiService.getTrainingMaterialsByPlayerId(this.currentUser.id)
          .then((response) =>{
            this.trainingMaterials = response.data;
          })
          .catch((e) => {
            console.log(e);
          })
    },
  },

  created() {
    this.retrieveTrainingMaterial();
  }
}
</script>

<style scoped>

</style>