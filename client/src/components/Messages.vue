<template>
  <div class="messages">
      <div class="notification is-light" :class="`is-${message.type}`" v-for="(message, i) in messages" :key="i">
          <button class="delete" @click.prevent="done(i)"></button>
          {{ message.text }}
      </div>
  </div>
</template>

<script>
import Session from '../services/session'
export default {
    data() {
        return {
            messages: Session.messages
        }
    },
    methods: {
        done(i){
            this.messages.splice(i,1)
        }
    }
}
</script>

<style>
    div.messages div.notification.is-light {
        margin-bottom: 0px;
    }
</style>