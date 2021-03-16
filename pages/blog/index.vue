<template>
    <div>
      <h1><span title="Cahier">📔 </span>Blog</h1>
      <div v-for='article in blog_posts' :key='article.key'> 
        <NuxtLink :to='"/blog/" + article.slug'>
          <h5>{{article.titre}}</h5>
          <p style='color:grey'>
            {{article.description}}
          </p>
        </NuxtLink>
      </div>
      <hr>
      <p>Tags :
        <span v-for='tag in tags' :key='tag.key'>
          <NuxtLink :to='"/blog/recherche/" + tag'>#{{tag}} </NuxtLink>
        </span>
      </p>
    </div>
</template>

<script>
export default {
  head:{
    title:'Blog :: Benjamin Geets',
  },
  data(){
    return{
      tags:[]
    }
  },
  beforeMount(){
    this.blog_posts.forEach(element => {
        element.tags.forEach(tag =>{
          if(!this.tags.includes(tag)){
          this.tags.push(tag)
        }
        })
      })
  },
    async asyncData({ $content}) {
      let blog_posts;
      blog_posts = await $content("blog").fetch();
     return { blog_posts};
     
  },
}
</script>