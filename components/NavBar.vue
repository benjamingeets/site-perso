<template>
    <nav>
        <ul>
            <li><NuxtLink to="/">👨‍💻 Accueil</NuxtLink></li>
            <li><NuxtLink to="/portfolio">⌨️ Portfolio</NuxtLink></li>
            <li><NuxtLink to="/blog">📔 Blog</NuxtLink></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.nuxt-link-exact-active{
    border-bottom:2px solid
}
nav{
    margin:25px 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    ul{
        padding:0;
        margin:0;
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        li{
            list-style: none;
            a{
                text-decoration: none;
                color:black;
            }
        }
    }
}
</style>