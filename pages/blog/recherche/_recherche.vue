<template>
    <div>
      <h1><span title="Cahier">📔 </span>Blog (#{{$route.params.recherche}})</h1>
      <div v-for='article in blog_posts' :key='article.key'> 
        <NuxtLink :to='"/blog/" + article.slug'>
          <h5>{{article.titre}}</h5>
          <p style='color:grey'>
            {{article.description}}
          </p>
 
        </NuxtLink>
      </div>
    </div>
</template>

<script>
export default {
  head(){
   return{
        title:`Blog #` + this.$route.params.recherche + ` :: Benjamin Geets`
   }
  },
    async asyncData({ $content, params}) {
    let blog_posts;
      blog_posts = await $content("blog").where({ 'tags': { $contains: params.recherche } }).fetch()
     return { blog_posts };
    }
}
</script>