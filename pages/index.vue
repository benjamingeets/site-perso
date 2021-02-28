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
      <blockquote v-html='$md.render(index.Biographie)'></blockquote>
       <p>
         <a id="mail" target="_blank" href="" title="Envoyer un e-mail">
            <button @click="contact()">📨 Me contacter</button>
          </a>
          <a href="https://linkedin.com/in/benjamingeets">LinkedIn</a> | 
          <a href="https://twitter.com/benjamingeets">Twitter</a> |
          <a href="https://github.com/benjamingeets">GitHub</a> |
          <a href="/Benjamin_Geets_CV.pdf">CV</a>
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
  data(){
    return{
      index: {
        Biographie:"chargement...",
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