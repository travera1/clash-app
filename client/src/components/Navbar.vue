<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{'is-active': isActive }" @click="isActive = !isActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{'is-active': isActive }">
      <div class="navbar-start">
        <router-link class="navbar-item is-tab" to="/" active-class="is-active" exact @click="isActive = !isActive"><img src="/images/pekka.png" height="28" >&nbsp;&nbsp;Home</router-link>
        <router-link class="navbar-item is-tab" to="/deckbuilder" active-class="is-active" exact @click="isActive = !isActive">&nbsp;&nbsp;Deck Builder</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item is-tab" @click="isActive = !isActive">
          <LoginBadge/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LoginBadge from './LoginBadge.vue'
export default {
  components: { 
    LoginBadge
  },
  data() {
    return {
      isActive: false
    }
  },
}
</script>

<style>
  .navbar{
    position: fixed; 
    top: 0;
    width: 100%;
  }
</style>