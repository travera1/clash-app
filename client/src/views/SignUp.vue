<template>
  <div>
      <div class="columns is-centered is-vcentered">
        <div class="column  has-text-white  is-three-quarters-mobile is-two-thirds-tablet is-half-desktop">
          <div class="notification has-background-dark">
            <p class="title has-text-white has-text-centered">Sign up for an account.</p>
          <form @submit.prevent>
            <div class="field">
                <label class="label has-text-warning">What's your first name?</label>
                <div class="control">
                  <input class="input" type="text" placeholder="first name" v-model="firstName">
                </div><br>
            </div>
            <div class="field">
                <label class="label  has-text-warning">What's youre last name?</label>
                <div class="control">
                  <input class="input" type="text" placeholder="last name" v-model="lastName">
                 
                </div><br>
            </div>
             <div class="field">
                <label class="label  has-text-warning">Enter a username.</label>
                <div class="control">
                  <input class="input" type="text" placeholder="username" v-model="username">
                </div><br>
            </div>
            <div class="field">
                <label class="label has-text-warning">Create a password</label>
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password" v-model="password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p><br>
            </div>
           
            <div class="control has-text-centered">
                <button class="button is-primary is-rounded has-text-weight-bold" style="width: 40%;" @click="signup">Sign Up</button>
              </div><br><br>
          </form>
          <div class="has-text-centered">
            <p class="">Already have an account?</p>
            <router-link class="has-text-warning is-underlined" :to="{ name: 'Login' }">Log In</router-link>
          </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"
import Session from "../services/session"
export default {
  data() {
    return {
      Session,
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    }
  },
  methods: {
    async signup(){
      if(this.firstName == "" || this.lastName =="" || this.username == "" || this.password == ""){
        this.Session.messages.push({text: 'Field must not be empty', type: 'danger'})
      }
      else {
        try{
          const response = await axios.post("api/users/", {
            firstName: this.firstName,
            lastName: this.lastName,
            username: this.username,
            password: this.password
          })
          if(!response){
            this.Session.messages.push({text: 'Something went wrong', type: 'danger'})
          }
          this.$router.push('/login')

        } catch (error) {
          this.Session.messages.push({text: error.msg, type: 'danger'})
        }
      }
    }
  }
}
</script>

<style lang="css">
  *{
    font-family: Tahoma;
    letter-spacing: 2px;
  }
  h1, h2{
      font-weight: normal;
  }
  .header {
      padding-top: 60px;
      
  }
  .elixirCost {
      color: rgb(187, 31, 179);
      /*text-shadow: -1px -1px 0 rgb(201, 25, 236), 1px -1px 0 rgb(233, 15, 215), -1px 1px 0 rgb(173, 19, 194), 1px 1px 0 rgb(187, 18, 209);*/
  }
  .card-image{
      width: 80%;
      
  }
  .card-info{
      /*color: rgb(77, 15, 15); */ 
      font-size: larger;
    
      color: white;
      top:1%;
      width: 30%;
      position: fixed;
      left: 50%;
  }
  .arena-info{
      
      text-align: center;
      color: rgb(255, 255, 255);  
      font-size: 2em;
      top:14%;
      width: 30%;
      position: fixed;
      left: 50%;
  }
</style>