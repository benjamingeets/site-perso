<template>
    <div>
        <h1>🔎 {{$route.params.recherche}}</h1>
        <ul>
            <li v-for='resultat in posts' :key='resultat.key'>
                <NuxtLink :to="'/portfolio/'+resultat.slug">{{resultat.titre}}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data(){
    return{
      posts:[]
    }
  },
  head(){
    return{
        title:`Recherche ${this.$route.params.recherche} - Benjamin Geets`,
        meta: [
                    { hid: 'og:title', property: 'og:title', content: "🔎 Projets utilisant " + this.$route.params.recherche + " - Benjamin Geets"}
                ]
    }
  },
  async fetch() {
      this.posts = await fetch(
        'https://api.benjamingeets.be/portfolios?technologies_contains=' + this.$route.params.recherche
      ).then(res => res.json())
    }
}
</script>