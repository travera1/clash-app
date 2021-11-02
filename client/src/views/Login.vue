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
import axios from "axios"
import router from "../router"
import bcrypt from "bcryptjs"
export default {
    data() {
        return {
            username: null,
            password: null,
            Session,
            users: [],
            found: false
        }
    },
    methods: {
        /*async login(){
            if(this.username == null || this.password == null){
                this.Session.messages.push({ text: 'field can\'t be empty.', type: 'danger'})
            }
            else {
                const response = await axios.get("api/users/")
                this.users = response.data
                this.users.forEach(user => {
                    if(this.username == user.username){
                        if(this.password == user.password){
                            this.Session.user = user
                            this.found = true
                            router.push(this.Session.toRoute)
                        }
                    }
                })
                if(!this.found){
                    this.Session.messages.push({ text: 'No user found with those credentials', type: 'danger'})
                }
               
                

            }
            //this.Session.Login(this.username, this.password)
            
            
            
        }*/
        
        async login(){
            
            if(this.username == null || this.password == null){
                this.Session.messages.push({ text: 'field can\'t be empty.', type: 'danger'})
                console.log('empty')
            }
            else {
            
                const response = await axios.get("api/users/")
                this.users = response.data
                this.users.forEach(user => {
                    if(this.username == user.username){
                        if(bcrypt.compareSync(this.password, user.password)){
                            this.Session.user = user
                            this.found = true
                            router.push(this.Session.toRoute)
                        }
                    }
                })
                if(!this.found){
                    this.Session.messages.push({ text: 'No user found with those credentials', type: 'danger'})
                }
            }
            //this.Session.Login(this.username, this.password)
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