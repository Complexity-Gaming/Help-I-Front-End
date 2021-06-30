<template>
  <section class="body">
    <div class="fullName">
      <h1> {{ currentUserFullName }} </h1>
      <h3> Lista de Juegos </h3>
      <hr>
      <div class="text-line">
        <h3> Correo electronico</h3>
        <span> {{ currentUser.email }} </span>
      </div>

      <button class="button">Cambiar contraseña</button> <br>
      <button class="button">Vincular Discord</button> <br>
      <hr>
      <button class="button" style="color: #139028">Vincular método de pago</button> <br>
      <button @click="navigateToApplication" class="button" style="color: #139028">Aplicar para Experto</button> <br>
      <button @click="navigateToApplications" class="button" style="color: #139028">Ver mis aplicaciones</button> <br>
      <button @click="navigateToMaterials" class="button" style="color: #139028">Ver mis materiales</button> <br>
    </div>

    <avatar class = "avatar">
      <img :src="currentUser.profilePictureUrl" alt="Avatar">
    </avatar>
  </section>
</template>

<script>
export default {
  name: "profile",
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
    navigateToApplication(){
      this.$router.push({name: 'application'});
    },

    navigateToApplications(){
      this.$router.push({name: 'applications', params: { id: this.currentUser.id}});
    },

    navigateToMaterials(){
      this.$router.push({name: 'material', params: { id: this.currentUser.id}});
    }

  },

  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
}
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

.fullName{
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