<template>
  <div>
    <header>
      <div class="left">
        <img src="~/assets/images/benjamingeets.JPEG" alt="Benjamin Geets" title="Benjamin Geets">
      </div>
      <div class="right">
        <h1>Benjamin Geets</h1>
        <p>{{index.ligneUne}}</p>
        <p>{{index.ligneDeux}}</p>
        <p></p>
      </div>
    </header>
    <article>
      <h3><span title="Boussole">🧭</span> Qui suis-je?</h3>
      <blockquote v-if="loaded" v-html='$md.render(index.Biographie)'></blockquote>
      <blockquote v-if="!loaded">
          <content-loader
    :width="340"
    :height="84"
    :speed="2"
    primaryColor="#dddddd"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="67" height="11" /> 
    <rect x="76" y="0" rx="3" ry="3" width="140" height="11" /> 
    <rect x="127" y="48" rx="3" ry="3" width="53" height="11" /> 
    <rect x="187" y="48" rx="3" ry="3" width="72" height="11" /> 
    <rect x="18" y="48" rx="3" ry="3" width="100" height="11" /> 
    <rect x="0" y="71" rx="3" ry="3" width="37" height="11" /> 
    <rect x="18" y="23" rx="3" ry="3" width="140" height="11" /> 
    <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
  </content-loader>
      </blockquote>
       <p>
         <a id="mail" target="_blank" href="" title="Envoyer un e-mail">
            <button @click="contact()">📨 Me contacter</button>
          </a>
          <a target="_blank" href="https://linkedin.com/in/benjamingeets">LinkedIn</a> | 
          <a target="_blank" href="https://twitter.com/benjamingeets">Twitter</a> |
          <a target="_blank" href="https://github.com/benjamingeets">GitHub</a> |
          <a target="_blank" href="/Benjamin_Geets_CV.pdf">CV</a>
       </p>
    </article>
  </div>
</template>

<style lang="scss" scoped>
header{
  display: flex;
  .left{
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
      border-radius: 0.5em;
      width: 100%;
      margin:0;
    }
  }
  .right{
    width:60%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    h1{
      margin:0;
      padding-left:10px;
    }
    p{
      margin:0 0 0 10px;
    }
  }
}
</style>

<script>

import { ContentLoader } from 'vue-content-loader'

export default {
  components:{
    ContentLoader
  },
  data(){
    return{
      loaded:false,
      index: {
        Biographie:"Chargement",
        ligneUne:"...",
        ligneDeux:"..."
      }
    }
  },
  head(){
    return{
      title:'Benjamin Geets - Développeur Web (Tournai 🇧🇪)'
    }
  },
  async fetch() {
      this.index = await fetch(
        'https://api.benjamingeets.be/index'
      ).then(res => res.json())
      this.loaded=true
  },
  methods:{
    contact(){
      const lienMail = document.querySelector("#mail")
      lienMail.href="mailto:bgeets"
      lienMail.href=lienMail.href+"@icloud.com"
    }
  }
}
</script>