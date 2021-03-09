<template>
    <div>
      <h1><span title="Clavier">⌨️</span> Portfolio</h1>
      <ul>
        <li v-for='projet in projets' :key='projet.key'><NuxtLink :to="'/portfolio/'+projet.slug">{{projet.titre}} </NuxtLink></li>
      </ul>
      <div v-if='!loaded'>
          <content-loader
    :width="400"
    :height="150"
    :speed="2"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <circle cx="10" cy="20" r="8" /> 
    <rect x="25" y="15" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="50" r="8" /> 
    <rect x="25" y="45" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="80" r="8" /> 
    <rect x="25" y="75" rx="5" ry="5" width="220" height="10" /> 
    <circle cx="10" cy="110" r="8" /> 
    <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
  </content-loader>
      </div>
      <div>Technologies : 
         <span v-for='techno in technologies' :key='techno.key'><NuxtLink :to="'/portfolio/recherche/'+techno">{{techno}}</NuxtLink> | </span>
       </div>
    </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'
export default {
  components:{
    ContentLoader
  },
  data(){
    return{
      projets:[],
      technologies:[],
      loaded:false
    }
  },
  head(){
    return{
      title:'Portfolio - Benjamin Geets',
      meta: [
                    { hid: 'og:title', property: 'og:title', content: "Portfolio - Benjamin Geets"},
                ]
    }
  },
  async fetch() {
      this.projets = await fetch(
        'https://api.benjamingeets.be/portfolios'
      ).then(res => res.json())

      //Parcourt les posts et, pour chacun va ajouter les technologies dans un array si elle n'y est pas déjà
      this.projets.forEach(element => {
        element.technologies.forEach(techno =>{
          if(!this.technologies.includes(techno)){
          this.technologies.push(techno)
        }
        })
      })
      this.loaded = true
    }
}
</script>