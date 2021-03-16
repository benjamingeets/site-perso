<template>
    <div>
        <h1>🔎 {{$route.params.recherche}}</h1>
        <ul>
            <li v-for='resultat in projets' :key='resultat.key'>
                <NuxtLink :to="'/portfolio/'+resultat.slug">{{resultat.titre}}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  head(){
    return{
        title:`Recherche ${this.$route.params.recherche} :: Benjamin Geets`,
        meta: [
                    { hid: 'og:title', property: 'og:title', content: "🔎 Projets utilisant " + this.$route.params.recherche + " - Benjamin Geets"}
                ]
    }
  },
    async asyncData({ $content, params}) {
    let projets;
      projets = await $content("projets").where({ 'technologies': { $contains: params.recherche } }).fetch()
     return { projets };
    }
}
</script>
