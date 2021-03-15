<template>
  <div>
    <header>
      <div class="left">
        <img src="~/assets/images/benjamingeets.JPEG" alt="Benjamin Geets" title="Benjamin Geets">
      </div>
      <div class="right">
        <h1>{{infos.nom}}</h1>
        <p>{{infos.ligne}}</p>
      </div>
    </header>
    <article>
      <h3><span title="Boussole">🧭</span> Qui suis-je?</h3>
      <blockquote>
        <nuxt-content :document='infos' /></blockquote>
       <p>
         <a id="mail" target="_blank" href="" title="Envoyer un e-mail">
            <button @click="contact()">📨 Me contacter</button>
          </a>
          <a target="_blank" :href="'https://linkedin.com/in/' + infos.username">LinkedIn</a> | 
          <a target="_blank" :href="'https://github.com/' + infos.username">GitHub</a> |
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
export default {
  head(){
    return{
      title:'Benjamin Geets - Développeur Web (Tournai 🇧🇪)'
    }
  },
    async asyncData({ $content}) {
    let infos;
      infos = await $content("infos").fetch();
     return { infos };
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