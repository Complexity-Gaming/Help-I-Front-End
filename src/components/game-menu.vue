<template>
  <v-container>

    <section class="banner">
      <img alt="Banner" :src="game.coverUrl">
      <div class="container">
        <h1>{{game.name}}</h1>
        <button class="option-button"> Encuentra a tu coach </button>
        <button class="option-button"> Clases basicas </button>
        <button class="option-button"> Clases detalladas </button>
      </div>
    </section>

    <section style="text-align: center">
      <h2>Bienvenido al menu de {{game.name}}</h2>
      <p>{{game.summary}}</p>
    </section>

    <section class="experts">
      <h3>EXPERTOS DESTACADOS</h3>
      <div class="container">
        <article>
          <img src="https://elcomercio.pe/resizer/1a5WcicS8XZoP2gbziPuxMUnfCU=/1200x800/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HDMIU63K2VAZVDYX4DDCSIKEQE.jpg">
          <h4 style="text-align: center">Ana</h4>
        </article>
        <article>
          <img src="https://img.redbull.com/images/c_crop,x_0,y_0,h_1200,w_1200/c_fill,w_830,h_830/q_auto,f_auto/redbullcom/2019/08/02/6fdd0e26-cac4-4691-9463-2dcfafb7f861/topias-topson-taavitsainen-dota-profile">
          <h4 style="text-align: center">Topson</h4>
        </article>
        <article>
          <img src="https://gamerzclass.com/wp-content/uploads/2020/06/NewAegis_PP_N0TAIL.jpg">
          <h4 style="text-align: center">NOTail</h4>
        </article>
      </div>
    </section>

    <h3>MATERIALES DESTACADOS</h3>
    <div class="row justify-center align-content-center mt-4" style="background-color: #666173">
      <div class="col-md-4">
        <v-img class="item-image" src="https://images.hive.blog/768x0/https://cdn.steemitimages.com/DQma7NA1roa6dLL3srF6htc9mCTcPT2kPdLdj6DQbQuumEK/logo_kardel_sharpeye__sniper_dota_2_by_ritchyzz-dbb5enm.png"></v-img>
      </div>
      <div class="col-md-4">
        <h3 style="text-align: right; color: #FFFFFF">Material destacado</h3>
        <p style="text-align: right; color: #FFFFFF">{{ game.summary }}</p>
      </div>
    </div>

  </v-container>
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

.container{
  width: 98%;
  margin: auto;
}

section{
  width: 100%;
  margin-bottom: 25px;
}

.banner{
  margin-top: 50px;
  position: relative;
  text-align: center;
}

.banner img{
  width: 100%;
  height: 500px;
  filter: brightness(0.4);
}

.banner .container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  color: #FFFFFF;
}

.banner h2 {
  font-size: 28px;
}

.option-button{
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  color:#FFFFFF;
  background-color:#139028;
  text-align:center;
}

.experts .container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.experts article{
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 15px;
}

.experts img{
  width: 250px;
  height: 250px;
  border-radius: 300px;
}

.item-image{
  width: 100%;
  height: 100%;
}

</style>