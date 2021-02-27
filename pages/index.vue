<template>
  <div>
    <header>
      <div class="left">
        <img src="~/assets/images/benjamingeets.JPEG" alt="Benjamin Geets" title="Benjamin Geets">
      </div>
      <div class="right">
        <h1>Benjamin Geets</h1>
        <p>Etudiant et développeur web.</p>
        <p title="Tournai, Hainaut, Belgique">Tournai (<span title="Drapeau belge">🇧🇪</span>), 21 ans.</p>
      </div>
    </header>
    <article>
      <h3><span title="Boussole">🧭</span> Qui suis-je?</h3>
      <blockquote>
        <p>Etudiant en e-Business depuis 2018, j'ai commencé à <b>bidouiller</b> dès que j'ai eu mon premier ordinateur vers 2012.
          Mes expériences m'ont mené au <b>développement web</b>. Aujourd'hui, je continue à me former au travers
          de tutoriels et des docs sur des frameworks tels que <b>VueJS</b> et <b>NuxtJS</b> afin de créer des applications que je déploie
          avec <b>Nginx</b>.
        </p>
      </blockquote>
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
      margin-left:10px;
    }
    p{
      margin:0;
      margin-left:10px;
    }
  }
}
</style>

<script>
export default {
  head:{
    title:'Benjamin Geets - Développeur Web (Tournai 🇧🇪)'
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