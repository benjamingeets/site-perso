<template>
    <div>
      <h1><span title="Cahier">📔 </span>Blog (#{{$route.params.recherche}})</h1>
      <div v-for='article in articles' :key='article.key'> 
        <NuxtLink :to='"/blog/" + article.slug'>
          <h5>{{article.titre}}</h5>
          <p style='color:grey'>
            {{article.article.substring(0,200)}}...
          </p>
 
        </NuxtLink>
      </div>
    </div>
</template>

<script>
export default {
  head(){
   return{
        title:`Blog #` + this.$route.params.recherche + ` - Benjamin Geets`
   }
  },
  data(){
    return{
      articles:[],
      posts:[],
    }
  },
  async fetch() {
      this.posts = await fetch(
        'https://api.benjamingeets.be/blogs?tags_contains=' + this.$route.params.recherche
      ).then(res => res.json())
      this.articles = this.posts
    }
}
</script>