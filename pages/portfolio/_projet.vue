<template>
    <div>
        <div>
            <h1>{{ projet.titre}}</h1>
        <img id="top-image" :src="projet.image">
        <p></p>
        <nuxt-content :document="projet"/>
        <p>
            Technologies utilisées: 
            <ul>
                <li v-for='techno in projet.technologies' :key="techno.key"><NuxtLink :to="'/portfolio/recherche/'+techno">{{techno}}</NuxtLink></li>
            </ul>
        </p>
        <p v-if='projet.site.disponible'>Lien : <a target="_blank" :href="'https://' + projet.site.url">{{projet.site.url}}</a> </p>
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
export default {
    head(){
        return{
            title : 'Portfolio : ' + this.projet.titre +' - Benjamin Geets',
            meta: [
                    { hid: 'og:title', property: 'og:title', content: "Porfolio : " + this.projet.titre + " - Benjamin Geets"},
                    { hid: 'og:image', property: 'og:image', content: "https://benjamingeets.be" + this.projet.image },
                    { hid: 'og:description', property: 'og:description', content: this.projet.description + "..." },
                    { hid: 'twitter:title', name:'twitter:title', content:"Porfolio : " + this.projet.titre + " - Benjamin Geets"},
                    { hid: 'twitter:description', name: 'twitter:description', content:this.projet.description + "..."},
                    { hid: 'twitter:image', name:'twitter:image', content: "https://benjamingeets.be" + this.projet.image }
                ]
        }
    },
    async asyncData({ $content, params}) {
    let projet;
      projet = await $content("projets", params.projet).fetch();
     return { projet };
    }
}
</script>