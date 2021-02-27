<template>
  <div>
    <NavBar/>
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>

<style lang="scss">
*{
  transition:all 250ms ease-in-out;
}
button{
  border-radius: 0.2em;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  transform:translateY(10px)
}
.fade-enter-active .fade-leave-active{
  transition: all 200ms ease;
}
</style>
