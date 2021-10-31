<template>
  <div class="buttons" v-if="!Session.user">
    <a class="button is-primary" @click="signUp"><strong>Sign up</strong></a>
    <a class="button is-light" @click="login">Log in</a>
  </div>
  <div v-else>
    <span class=""> Hello {{ name }}</span> 
    <a class="button ml-3 is-warning is-small" @click="logout">Log out</a>
  </div>
</template>

<script>
import Session from "../services/session"
export default {
    data() {
        return {
            Session
        }
    },
    methods: {
        login() {
            this.$router.push('/login')
        },
        signUp(){
            this.$router.push('/signup') 
        },
        logout(){
            this.Session.user = null
        }
    },
    computed: {
        name() {
            return this.Session.user.firstName + ' ' + this.Session.user.lastName
        }
    }
    
}
</script>

<style>

</style>