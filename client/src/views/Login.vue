<template>
    <div class="columns is-centered">
        <form class="section column" @submit.prevent="login()">
            <div class="field">
                <p class="control has-icons-right">
                    <input class="input" type="text" placeholder="Username.." v-model="username">
                    <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password" v-model="password">
                    <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                    </span>
                </p>
                </div>
                <div class="field">
                <p class="control">
                    <button class="button is-success">
                    Login
                    </button>
                </p>
            </div>
        </form>
    </div>

</template>

<script>
import Session from "../services/session"
//import axios from "axios"
export default {
    data() {
        return {
            username: null,
            password: null,
            Session
        }
    },
    methods: {
        login(){
            this.Session.Login(this.username, this.password)
        }
    }
}
</script>

<style scoped>
    .column{
        max-width: 30%;
        ;
    }
</style>