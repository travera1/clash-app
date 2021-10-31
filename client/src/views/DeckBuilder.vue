<template>
  <div class="hero-head">
    <div class="container">
      <div class="header columns is-vcentered">
          <div class="column">
            <h1 class="mt-3 ml-3 title has-text-white">Clash Royale Deck Builder</h1>
            <h3 class="ml-5 subtitle has-text-white">Select Cards and Add to your decks.</h3>
          </div>
          <div class="column"><span class="button">Create New</span></div>
        
      </div><br>
      <div>
          <Deck/>
          <br>
          
      </div>
    </div>
  </div>
</template>

<script>
import { cards } from '../services/cards'
import Deck from '../components/Deck.vue'
import axios from 'axios'
import Session from '../services/session'
export default {
    components: {
        Deck
    },
    data() {
        return {
            cards,
            Session,
            decks: [],

        }
    },
    async mounted(){
        const response = await axios.get("api/decks/")
        let allDecks = response.data
        let user_id = this.Session.user._id
        allDecks.forEach(deck => {
            if(deck.user_id === user_id){
                this.decks.push(deck)
            }
        })
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
  #card-name{
      text-align: center;
      color: White;
      font-size: 1.6em;
  }
  #our-list{
      opacity: 0.8;
      cursor: pointer;
  }
  #our-list ul {
      list-style-type: none;
      padding: 0;
  }

  #our-list li{
      padding: 2px;
      padding-left: 7px;
      border-left: 5px solid #ddd;
      margin-top: 2px;
      color: Red;
  }
  #our-list li span{
      opacity: 1;
  }

  #our-list li:hover{
      border-color:rgb(126, 123, 123);
  }
  #sort-elixir{
      color:rgb(172, 32, 228)
  }
  
</style>
