<template>
  <div class="hero-head">
    <div class="container">
      <div class="header">
        <h1 class="mt-3 ml-3 title has-text-white">Clash Royale Card Info</h1>
        <h3 class="ml-5 subtitle has-text-white">Your clash royale card dictionary.</h3>
      </div><br>
      <div class="columns">
        <div class="mx-5 column is-one-third">
          <div class="field has-addons columns is-gapless">
            <div class="column btn">
              <span class="button is-fullwidth has-background-link-light has-text-danger" id="showCards" @click="selectList('cards')">
                Cards
              </span> 
            </div>
            <div class="column">
              <span class="is-fullwidth button has-background-danger-light has-text-link" id="showArenas" @click="selectList('arenas')">
                Arenas
              </span> 
            </div>
            <div class="column">
              <span class="mx-4 is-fullwidth button has-background-primary-light has-text-link" id="randomCard" @click="randomCard">
                Random Card
              </span> 
            </div>
          </div>
          <form class="field has-addons" v-on:submit.prevent id="search-cards">
            <div class="control is-expanded">
              <input class="input" id="search" type="text" placeholder="Search cards..." v-model="filterTerm" @keyup="preventDefault(e)">
            </div>
            <div class="control">
              <span class="button has-background-link-light has-text-danger" id="sort-alpha" @click="sortAlpha">
                <i class="fas fa-lg fa-sort-alpha-down"></i>
              </span> 
            </div>
            <div class="control">
              <span class="button has-background-danger-light has-text-link" id="sort-level" @click="sortRarity">
                <i class="fas fa-sort-amount-down"></i>
              </span> 
            </div>
            <div class="control">
              <span class="button has-background-warning-light" id="sort-elixir" @click="sortElixir">
                <i class="fas fa-tint"></i>
              </span> 
            </div>
          </form>
          
          <div class="notification column is-three-fifths" id="our-list">
            <h1 class="title has-text-info has-text-weight-bold" id="list-title">{{ displayType }}</h1>
            <div id="list-target">
              <ul>
                <div v-for="item in selectedList" :key="item.name">
                  <div v-if="compareTerm(item.name)" >
                    <div v-if="sortedType =='rarity' && displayType=='Cards'">
                      <li v-if="item.type=='common'" :style="{ color: '#638AC8' }" @click="displayItem(item)">{{ item.name }}</li>
                      <li v-else-if="item.type=='rare'" :style="{ color: '#FF7800'}" @click="displayItem(item)">{{ item.name }}</li>
                      <li v-else-if="item.type=='epic'" :style="{ color: '#AC1FF8' }" @click="displayItem(item)">{{ item.name }}</li>
                      <li v-else :style="{ color: '#FF01EF' }" @click="displayItem(item)">{{ item.name }}</li>
                    </div>
                    <li v-else  :style="{ color: 'red' }" @click="displayItem(item)">{{ item.name }}</li>
                  </div>
                </div>
              </ul>
              
            </div>
          </div>
        </div>
        <div v-if="isDisplaying" class="column card-info ">
          <div class="">
            <p class="is-italic has-text-weight-bold card-info" id="description"></p>
            <div class="is-italic has-text-weight-bold arena-info" id="name-and-requirement"></div>
          </div><br><br><br><br><br>
          <p class="title has-text-white">{{ name }}</p>
          <p> {{ description }}</p>
          <figure v-if="isDisplaying" class="image" id="our-image">
            <img v-if="displayType=='Cards'" class="card-image" :src="'/images/'+image" alt="card">
             <img v-else class="card-image" :src="'/images-arena/'+image" alt="arena">
          </figure>
          <p id="card-name"></p>
        </div>
      </div>
    </div>
  </div>
    
</template>

<script>
// @ is an alias to /src
import { cards } from '../services/cards'
import { arenas } from '../services/arenas'

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
        displayType: "Cards",
        cards,
        arenas,
        selectedList: cards,
        name: "",
        description: "",
        image: "",
        filterTerm: "",
        sortedType: "",
        isDisplaying: false

    }
  },
  methods: {
    selectList(type){
      if(type == 'cards'){
        this.displayType = "Cards"
        this.selectedList = cards
        this.sortedType = "alpha"
      } else {
        this.displayType = "Arenas"
        this.selectedList = arenas
        this.sortedType=""
      }
      this.isDisplaying = false
     
    },
    compareTerm(name){
      return name.toLowerCase().includes(this.filterTerm.toLowerCase())
    },
    displayItem(item){
      //when card clicked, display name, desc, img 
      this.isDisplaying = true
      if(this.displayType =='Cards'){
         this.name = item.name
         this.description = item.description
         this.image = item.image
      } else {
        this.name = item.name
        this.description = item.name +' ' +item.required
        this.image = item.image
      }
    },
    sortAlpha(){
      this.sortedType=""
      let list = this.selectedList

      this.selectedList=list.sort((a,b) =>{
        if(a.name < b.name){
          return -1
        }
        if(a.name >b.name){
          return 1
        }
        return 0
      })
    },
    sortRarity(){
      if(this.displayType == 'Cards'){
        this.sortedType='rarity'
        let commons =[]
        let rares =[]
        let epics =[]
        let legendaries =[]
        cards.forEach(card =>{
            if(card.type=="common") {
              commons.push(card)
            } else if (card.type=="rare") {
              rares.push(card)
            }
            else if (card.type=="epic") {
              epics.push(card)
            } else {
              legendaries.push(card)
            }  
        })
        epics = epics.concat(legendaries)
        rares = rares.concat(epics)
        commons = commons.concat(rares)

        this.selectedList = commons
      }
      
    },
    sortElixir(){
      this.sortedType=""
      if(this.displayType == 'Cards'){
        this.selectedList=cards.sort((a,b) => {
          if(a.elixirCost < b.elixirCost) {
            return -1
          }
          if(a.elixirCost < b.elixirCost){
            return 1
          }
          return 0
        })
      }
    },
    randomCard(){
      this.isDisplaying = true 
      this.displayType = "Cards"
      let card = cards[Math.floor(Math.random()*cards.length)]
      this.name = card.name
      this.description = card.description
      this.image = card.image
    },
    preventDefault(e){
      if(e){
        e.preventDefault()
      }
    }
  },
  mounted(){
    this.selectList('cards')
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
