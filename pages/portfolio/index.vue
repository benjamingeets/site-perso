<template>
    <div>
      
      <h1><span title="Clavier">⌨️</span> Portfolio</h1>
      <ul>
        <li v-for='projet in portfolio' :key='projet.key'><NuxtLink :to="'/portfolio/'+projet.slug">{{projet.titre}}</NuxtLink></li>
      </ul>
      <div>Technologies : 
         <span v-for='techno in technologies' :key='techno.key'><NuxtLink :to="'/portfolio/recherche/'+techno">{{techno}}</NuxtLink> | </span>
       </div>
    </div>
</template>

<script>
export default {

  data(){
    return{
      technologies:[]
    }
  },
  head(){
    return{
      title:'Portfolio :: Benjamin Geets',
      meta: [
                    { hid: 'og:title', property: 'og:title', content: "Portfolio - Benjamin Geets"},
                ]
    }
  },
  async asyncData({ $content}) {
    let portfolio;
      portfolio = await $content("projets").fetch();
     return { portfolio };
     
  },
  beforeMount(){
    this.portfolio.forEach(element => {
        element.technologies.forEach(techno =>{
          if(!this.technologies.includes(techno)){
          this.technologies.push(techno)
        }
        })
      })
  }
}
</script>