<template>
    <div>
        <h1>{{titre}}</h1>
        <img v-if='image != null' :src="image" alt="">
        <div v-html='$md.render(content)'></div>
        <p>Tags : 
            <span v-for='tag in tags' :key="tag.key"><NuxtLink :to="'/blog/recherche/' + tag">#{{tag}} </NuxtLink></span> 
        </p>
        <NuxtLink to="/blog">
            <button>
                ↩️ Retour
            </button>
        </NuxtLink>
        <hr>
        <p>publié le {{date.jour}}/{{date.mois}}/{{date.annee}} par <a href="https://twitter.com/benjamingeets">@benjamingeets</a></p>
    </div>
</template>

<script>
export default {
    head(){
        return{
             title: `${this.titre} - Blog de Benjamin Geets`,
               meta: [
                    { hid: 'og:title', property: 'og:title', content: this.titre + " - Benjamin Geets"},
                    { hid: 'og:image', property: 'og:image', content: this.image },
                    { hid: 'og:description', property: 'og:description', content: this.content.substring(0,200) + "..." },
                    { hid: 'twitter:title', name:'twitter:title', content:this.titre + " - Benjamin Geets"},
                    { hid: 'twitter:description', name: 'twitter:description', content:this.content.substring(0,200) + "..."},
                    { hid: 'twitter:image', name:'twitter:image', content:this.image }
                ]
        }
    },
    data(){
        return{
            titre:'⚪️ Titre de l\'article',
            article:{},
            content:'',
            image:'',
            posts:[],
            tags:'',
            date:{
                jour:'',
                mois:'',
                annee:''
            }
        }
    },
    async fetch() {
      this.posts = await fetch(
        'https://api.benjamingeets.be/blogs?slug=' + this.$route.params.post
      ).then(res => res.json())

      //Je mets le résultat de ma requete dans une variable article parce que c'est plus joli
      this.article = this.posts[0]

      //Je mets le contenu dans mes variables
      this.titre = this.article.titre
      this.content = this.article.article
      this.image =  "https://api.benjamingeets.be" + this.article.image.url
      this.tags = this.article.tags

      //Je coupe la date pour mettre les valeurs ou ça m'arrange
      this.date.jour = this.article.published_at.substring(8,10)
      this.date.mois = this.article.published_at.substring(5,7)
      this.date.annee = this.article.published_at.substring(0,4)
    }
}
</script>

<style lang="scss">
nav{
    ul{
        li{
            .nuxt-link-active[href="/blog"]{
                border-bottom: 2px solid;
            }
        }
    }
}

</style>