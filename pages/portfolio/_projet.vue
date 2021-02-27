<template>
    <div>
        <h1>{{titre}}</h1>
        <img id="top-image" :src="image">
        <p v-html='$md.render(description)'></p><!-- Utilise MarkDownIt pour parser le MD -->
        <p>
            Technologies utilisées:
            <ul>
                <li v-for='techno in technologies' :key="techno.key"><NuxtLink :to="'/portfolio/recherche/'+techno">{{techno}}</NuxtLink></li>
                <!-- https://api.benjamingeets.be/portfolios?Technologies_contains=php -->
            </ul>
        </p>
        <p>Lien : <a :href="'https://' + url">{{url}}</a> </p>
        <NuxtLink to="/portfolio">
            <button>
                ↩️ Retour
            </button>
        </NuxtLink>
    </div>
</template>

<style lang="scss">
nav{
    ul{
        li{
            .nuxt-link-active[href="/portfolio"]{
                border-bottom: 2px solid;
            }
        }
    }
}

</style>

<script>
export default {
    data(){
        return{
            posts:[],
            titre:"Titre",
            description:"Lorem",
            url:"https://benjamingeets.be",
            image:"",
            technologies:{}
        }
    },
    head(){
        return{
            title : 'Portfolio : ' + this.titre +' - Benjamin Geets',
            meta: [
                    { hid: 'og:title', property: 'og:title', content: "Porfolio : " + this.titre + " - Benjamin Geets"},
                    { hid: 'og:image', property: 'og:image', content: this.image },
                    { hid: 'og:description', property: 'og:description', content: this.description.substring(0,140) + "..." }
                ]
        }
    },
   async fetch() {
      this.posts = await fetch(
        'https://api.benjamingeets.be/portfolios?slug=' + this.$route.params.projet
      ).then(res => res.json())
      this.titre = this.posts[0].titre
      this.description = this.posts[0].description
      this.url = this.posts[0].url
      this.image='https://api.benjamingeets.be' + this.posts[0].image.url
      this.technologies=this.posts[0].technologies
    }
}
</script>