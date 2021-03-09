<template>
    <div>
        <div v-if="!loaded">
            <content-loader
            :width="400"
            :height="230"
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
             >
            <circle cx="31" cy="31" r="15" /> 
            <rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
            <rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
            <rect x="0" y="60" rx="2" ry="2" width="400" height="204" />
             </content-loader>
            <content-loader
            :width="340"
            :height="84"
            :speed="2"
            primaryColor="#f3f3f3"
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
        </div>
        <div v-if="loaded">
            <h1>{{titre}}</h1>
        <img id="top-image" :src="image">
        <div v-html='$md.render(description)'></div><!-- Utilise MarkDownIt pour parser le MD -->
        <p>
            Technologies utilisées:
            <ul>
                <li v-for='techno in technologies' :key="techno.key"><NuxtLink :to="'/portfolio/recherche/'+techno">{{techno}}</NuxtLink></li>
                <!-- https://api.benjamingeets.be/portfolios?Technologies_contains=php -->
            </ul>
        </p>
        <p v-if='disponible'>Lien : <a target="_blank" :href="'https://' + url">{{url}}</a> </p>
        <p v-else><i>Le projet n'est plus disponible en ligne.</i></p>
        <NuxtLink to="/portfolio">
            <button>
                ↩️ Retour
            </button>
        </NuxtLink>
        </div>
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

import { ContentLoader } from 'vue-content-loader'

export default {
    components:{
        ContentLoader
    },
    data(){
        return{
            loaded:false,
            posts:[],
            titre:"Titre",
            description:"Lorem",
            url:"https://benjamingeets.be",
            image:"",
            technologies:{},
            disponible:false
        }
    },
    head(){
        return{
            title : 'Portfolio : ' + this.titre +' - Benjamin Geets',
            meta: [
                    { hid: 'og:title', property: 'og:title', content: "Porfolio : " + this.titre + " - Benjamin Geets"},
                    { hid: 'og:image', property: 'og:image', content: this.image },
                    { hid: 'og:description', property: 'og:description', content: this.description.substring(0,140) + "..." },
                    { hid: 'twitter:title', name:'twitter:title', content:"Porfolio : " + this.titre + " - Benjamin Geets"},
                    { hid: 'twitter:description', name: 'twitter:description', content:this.description.substring(0,140) + "..."},
                    { hid: 'twitter:image', name:'twitter:image', content:this.image }
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
      this.disponible = this.posts[0].disponible
      this.loaded = true
    }
}
</script>