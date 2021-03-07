<template>
    <div>
      <h1><span title="Cahier">📔 </span>Blog</h1>
      <div v-for='article in articles' :key='article.key'> 
        <NuxtLink :to='"/blog/" + article.slug'>
          <h5>{{article.titre}}</h5>
          <p style='color:grey'>
            {{article.article.substring(0,200)}}...
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
    title:'Blog - Benjamin Geets',
  },
  data(){
    return{
      articles:[],
      posts:[],
      tags:[]
    }
  },
  async fetch() {
      this.articles = await fetch(
        'https://api.benjamingeets.be/blogs?_sort=id:DESC'
      ).then(res => res.json())

      //Check tous les tags utilisés a travers les articles (même algo que pour les technos)
      this.articles.forEach(element => {
        element.tags.forEach(tag =>{
          if(!this.tags.includes(tag)){
          this.tags.push(tag)
        }
        })
      })
    }
}
</script>