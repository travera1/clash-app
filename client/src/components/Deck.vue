<template>
<div>
    <div>
        <!--v-for each deck the user has -->
        <div class="container">
            <div class="columns deck notification">
                <div class="column is-three-fifths ">
                    <div class="columns is-centered is-gapless is-multiline">
                        <DeckSlot @click="modifyDeck(1)"/>
                        <DeckSlot @click="modifyDeck(2)"/>
                        <DeckSlot @click="modifyDeck(3)"/>
                        <DeckSlot @click="modifyDeck(4)"/>
                        <DeckSlot @click="modifyDeck(5)"/>
                        <DeckSlot @click="modifyDeck(6)"/>
                        <DeckSlot @click="modifyDeck(7)"/>
                        <DeckSlot @click="modifyDeck(8)"/>
                    </div>
                </div>
                <div class="column is-two-fifths">
                   <DeckInfo/>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal" :class="{'is-active': isActive }">
    <div class="modal-background" @click="isActive = !isActive"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Select Card</p>
          <button class="delete" aria-label="close" @click="isActive = !isActive"></button>
        </header>
        <section class="modal-card-body">
          <form class="field has-addons" v-on:submit.prevent id="search-cards">
              <div class="control is-expanded">
                <input class="input" id="search" type="text" :placeholder="'Search '+displayType+'...'" v-model="filterTerm" @keyup="preventDefault(e)">
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
              <div v-if="this.Session.user" class="control">
                <span class="button has-background-grey-light has-text-warning" id="sort-fav" @click="sortFav">
                    <i class="fas fa-star"></i>
                </span> 
              </div>
          </form>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success px-5"  @click="isActive = !isActive">Add</button>
          <button class="button is-danger"  @click="isActive = !isActive">Remove</button>
          <button class="button" @click="isActive = !isActive"> Cancel</button>
        </footer>
      </div>
    </div>
</div>
  
</template>

<script>
import { cards } from '../services/cards'
import DeckSlot from './DeckSlot.vue'
import DeckInfo from './DeckInfo.vue'
import Session from '../services/session'

    
export default {
    components: {
        DeckSlot, DeckInfo
    },
    data() {
        return {
            isActive: false,
            Session,
            displayType: "Cards",
            cards,
            name: "",
            editedname: "",
            image: "",
            filterTerm: "",
            sortedType: "",
            deckCards: [{},{},{},{},{},{},{},{}],
            slotNum: 0,
            
            
        }
    },
    methods: {
        modifyDeck(slotNum){
            this.isActive = !this.isActive
            this.slotNum = slotNum
            console.log(this.slotNum)
        }
    }
}
</script>

<style scoped>
    .deck {
        background: rgb(0,0, 0, .5)
    }
</style>