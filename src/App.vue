
<!-- 
    Lavorare sezione per sezione, 
        prima con una struttra base senza perdere troppo tempo con i settagli solo HTML e CSS
    Una volta completato il leyout senza dinamicita iniziamo con Js 
         - Popolare le voci di menù di PageHeader e PageFooter dinamicamente, tramite delle props, creando una struttura dati idonea.
    Una volta assicuranti che tutto funziona procediamo sezione per seszione e aggiungiamo CSS
        e facciamo refactieing 
 -->
<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import axios  from 'axios';
import {store} from './store'



export default {
  name: "App",
  components:{
    Header,
    Main,
    Footer,
  },
  data(){
    return{
        store,
        links:[
          {
            name: 'Home',
            active: 'true'
          },
          {
            name: 'About',
            active: 'false'
          },
          {
            name: 'Projects',
            active: 'false'
          },
          {
            name: 'Services',
            active: 'false'
          },
          {
            name: 'Blog',
            active: 'false'
          },
          {
            name: 'Contacts',
            active: 'false'
          }
        ]
    }
  },
  methods: {

  }}
</script>

<template>
  <Header />

  <Main/>
 
  <Footer/>
</template>

<style lang="scss" >
@use "./assets/scss/main.scss";
 *{
  font-family: 'Inconsolata', monospace;
  font-family: 'Kablammo', cursive;
  font-family: 'Montserrat', sans-serif;
 }
</style>
