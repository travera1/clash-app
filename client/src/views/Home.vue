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
              <span class="button is-fullwidth has-background-link-light has-text-danger" id="showCards">
                Cards
              </span> 
            </div>
            <div class="column">
              <span class="is-fullwidth button has-background-danger-light has-text-link" id="showArenas">
                Arenas
              </span> 
            </div>
            <div class="column">
              <span class="mx-4 is-fullwidth button has-background-primary-light has-text-link" id="randomCard">
                Random Card
              </span> 
            </div>
          </div>
          <form class="field has-addons" id="search-cards">
            <div class="control is-expanded">
              <input class="input" id="search" type="text" placeholder="Search cards...">
            </div>
            <div class="control">
              <span class="button has-background-link-light has-text-danger" id="sort-alpha">
                <i class="fas fa-lg fa-sort-alpha-down"></i>
              </span> 
            </div>
            <div class="control">
              <span class="button has-background-danger-light has-text-link" id="sort-level">
                <i class="fas fa-sort-amount-down"></i>
              </span> 
            </div>
            <div class="control">
              <span class="button has-background-warning-light" id="sort-elixir">
                <i class="fas fa-tint"></i>
              </span> 
            </div>
          </form>
          
          <div class="notification column is-three-fifths" id="our-list">
            <h1 class="title has-text-info has-text-weight-bold" id="list-title"></h1>
            <div id="list-target">
              <div id="list-col-1">

              </div>
              
            </div>
          </div>
        </div>
        <div class="column card-info ">
          <div class="">
            <p class="is-italic has-text-weight-bold card-info" id="description"></p>
            <div class="is-italic has-text-weight-bold arena-info" id="name-and-requirement"></div>
          </div><br><br><br><br><br>
          <figure class="image " id="our-image">
            
          </figure>
          <p id="card-name"></p>
        </div>
      </div>
        
    </div>
  </div>
    
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  },
  data() {
    return {

    }
  },
  mounted() {
    let ascript = document.createElement('script')
      ascript.setAttribute('src', '../app.js')
      document.head.appendChild(ascript)

  },
  methods: {

  }
}
</script>

<style lang="css">
  div{
    font-family: Tahoma;
    letter-spacing: 1px;
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
      width: 302px;
      height: 363px;
      
  }
  .card-info{
      /*color: rgb(77, 15, 15); */
      color: rgb(76, 0, 253);  
      font-size: larger;
      top:10%;
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
