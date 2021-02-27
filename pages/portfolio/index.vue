<template>
    <div>
      <h1><span title="Clavier">⌨️</span> Portfolio</h1>
      <ul>
        <li v-for='projet in posts' :key='projet.key'><NuxtLink :to="'/portfolio/'+projet.slug">{{projet.titre}} </NuxtLink></li>
      </ul>
      <p>Technologies : 
         <span v-for='techno in technologies' :key='techno.key'><NuxtLink :to="'/portfolio/recherche/'+techno">{{techno}}</NuxtLink> | </span>
       </p>
    </div>
</template>

<script>
export default {
  data(){
    return{
      posts:[],
      technologies:[],
      teest:""
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
      this.posts = await fetch(
        'https://api.benjamingeets.be/portfolios'
      ).then(res => res.json())

      //Parcourt les posts et, pour chacun va ajouter les technologies dans un array si elle n'y est pas déjà
      this.posts.forEach(element => {
        element.technologies.forEach(techno =>{
          if(!this.technologies.includes(techno)){
          this.technologies.push(techno)
        }
        })
      })
    }
}
</script>