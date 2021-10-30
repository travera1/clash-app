<template>
  <div class="is-dark has-background">
    
    <Navbar/>
    <Messages/>
    <img class="hero-background" src="/images/bg-2.jpg" alt="background"> 
    
    <router-view/>
  </div>
</template>

<script>
import Messages from "./components/Messages.vue"
import Navbar from "./components/Navbar.vue"

export default {
  components: {
    Navbar, 
    Messages
  },
}
</script>

<style lang="css">
  .hero.has-background {
      position: relative;
      overflow: hidden;
  }
  .hero-background {
      position: fixed;
      object-fit: cover;
      object-position: center center;
      width: 100%;
      height: 100%;

  }
 
</style>
