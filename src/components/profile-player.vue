<template>
    <section class="body">
      <div class="interlineado">
        <span> {{perfil.personalProfile.firstName }} {{perfil.personalProfile.lastName }} </span>
        <h3> Lista de Juegos </h3>
        <hr>
        <div class="text-line">
          <h3> Correo electronico</h3>
          <span> {{perfil.email }} </span>
        </div>

        <button class="button">Cambiar contraseña</button> <br>
        <button class="button">Vincular Discord</button> <br>
        <hr>
        <button class="button">Vincular método de pago</button> <br>

      </div>

      <md-avatar class = "avatar">
        <img src="../assets/profile-player-img.jpg" alt="Avatar" height="120" width="120">
      </md-avatar>
    </section>
</template>

<script>
import HelpiApiService from '../services/helpi-api-service';
export default {
  name: "profile-player",
  data(){
    return {
      perfil: {
        id: 0,
        email: '',
        personalProfile: {
          firstName: '',
          lastName: '',
          birthdate: ''
        }
      }
    }
  },

  methods: {
    retrievedPerfil(id){
      HelpiApiService.getPerfilPlayerBy(id)
      .then((response) => {
        this.perfil = response.data;
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
    }
  },

  created() {
    this.retrievedPerfil(this.$route.params.id);
  }
};

</script>

<style scoped>

.body{
  display: flex;
  justify-content: space-between;
  margin: 25px;
}

.avatar{
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 80%;
  display: flex;
  justify-content: center;
}

.interlineado{
  line-height: 55px;
}

.text-line{
  display: flex;
  white-space: pre-wrap;
}

.button {
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}


</style>