<template>
    <div>
      <h1><span title="Cahier">📔 </span>Blog</h1>
      <div class="skeleton" v-if="!loaded">
          <content-loader
            :width="250"
            :height="100"
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <circle cx="31" cy="31" r="15" /> 
            <rect x="59" y="24" rx="2" ry="2" width="140" height="10" /> 
            <rect x="0" y="60" rx="2" ry="2" width="400" height="27" />
          </content-loader>
           <content-loader
            :width="250"
            :height="100"
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <circle cx="31" cy="31" r="15" /> 
            <rect x="59" y="24" rx="2" ry="2" width="140" height="10" /> 
            <rect x="0" y="60" rx="2" ry="2" width="400" height="27" />
          </content-loader>
           <content-loader
            :width="250"
            :height="100"
            :speed="2"
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <circle cx="31" cy="31" r="15" /> 
            <rect x="59" y="24" rx="2" ry="2" width="140" height="10" /> 
            <rect x="0" y="60" rx="2" ry="2" width="400" height="27" />
          </content-loader>
      </div>
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

import { ContentLoader } from 'vue-content-loader'
export default {
  head:{
    title:'Blog - Benjamin Geets',
  },
  components:{
    ContentLoader
  },
  data(){
    return{
      articles:[],
      posts:[],
      tags:[],
      loaded:false
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
        this.loaded=true
      })
    }
}
</script>