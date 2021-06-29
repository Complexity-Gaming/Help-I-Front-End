<template>
  <section class="body">
    <div class="fullName">
      <span> {{ currentUserFullName }} </span>
      <h3> Lista de Juegos </h3>
      <hr>
      <div class="text-line">
        <h3> Correo electronico</h3>
        <span> {{ currentUser.email }} </span>
      </div>

      <button class="button">Cambiar contraseña</button> <br>
      <button class="button">Vincular Discord</button> <br>
      <hr>
      <button class="button">Vincular método de pago</button> <br>

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