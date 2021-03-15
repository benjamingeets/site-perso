<template>
    <div>
        <h1>{{post.titre}}</h1>
        <img v-if='post.image != null' :src="post.image" alt="">
        <nuxt-content :document='post'/>

        <p>Tags : 
            <span v-for='tag in post.tags' :key="tag.key"><NuxtLink :to="'/blog/recherche/' + tag">#{{tag}} </NuxtLink></span> 
        </p>
        <NuxtLink to="/blog">
            <button>
                ↩️ Retour
            </button>
        </NuxtLink>
        <hr>
        <p>publié le {{post.date}} par <a href="https://twitter.com/benjamingeets">@benjamingeets</a></p>
    </div>
</template>

<script>
export default {
    head(){
        return{
             title: `${this.post.titre} - Blog de Benjamin Geets`,
               meta: [
                    { hid: 'og:title', property: 'og:title', content: this.post.titre + " - Benjamin Geets"},
                    { hid: 'og:image', property: 'og:image', content: 'https://benjamingeets.be' + this.post.image },
                    { hid: 'og:description', property: 'og:description', content: this.post.description + "..." },
                    { hid: 'twitter:title', name:'twitter:title', content:this.post.titre + " - Benjamin Geets"},
                    { hid: 'twitter:description', name: 'twitter:description', content:this.description + "..."},
                    { hid: 'twitter:image', name:'twitter:image', content: 'https://benjamingeets.be' + this.post.image }
                ]
        }
    },
    async asyncData({ $content, params}) {
    let post;
      post = await $content("blog", params.post).fetch();
     return { post };
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