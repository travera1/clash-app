import { cards, arenas } from './data.js'

let showColors = false
let showCards = true 
let filterTerm = ''
let disableButtons = false
//show default list
displayList(cards)

//event listeners
const cardsBtn = document.getElementById('showCards')
const arenasBtn = document.getElementById('showArenas')
const alphaBtn = document.getElementById('sort-alpha')
const levelBtn = document.getElementById('sort-level')
const elixerBtn = document.getElementById('sort-elixir')
const random = document.getElementById('randomCard')
const searchForm = document.forms['search-cards']
const searchBar = searchForm.querySelector('div input')

cardsBtn.addEventListener("click", () => {
    showCards = true
    clearDisplay()
    document.getElementById('search').setAttribute('placeholder', 'Search cards...')
    document.getElementById('list-title').innerHTML = 'Cards'
    document.getElementById("our-list").classList.remove('is-four-fifths');
    document.getElementById("our-list").classList.add('is-three-fifths');
    
    //document.getElementById("sort-level").setAttribute('disabled','false')
   // document.getElementById("sort-elixir").setAttribute('disabled','false')
    disableButtons = false
    displayList(cards)
    applyFilter()
})
arenasBtn.addEventListener("click", () => {
    showCards = false
    showColors = 
    clearDisplay()
    document.getElementById('search').setAttribute('placeholder', 'Search arenas...')
    document.getElementById('list-title').innerHTML = 'Arenas'
    document.getElementById("our-list").classList.remove('is-three-fifths');
    document.getElementById("our-list").classList.add('is-four-fifths');
    //document.getElementById("sort-level").setAttribute('disabled','true')
    // document.getElementById("sort-elixir").setAttribute('disabled','true')
    disableButtons = true
    displayList(arenas)
    applyFilter()
})
alphaBtn.addEventListener("click", () =>{
    let sortedList = sortByAlphabet()
    showColors = false
    displayList(sortedList)
    applyFilter()
})
levelBtn.addEventListener("click", ()=>{
    if(!disableButtons){
        let sortedCards = sortByRarity()
        showColors = true
        displayList(sortedCards)
        applyFilter()
    }
    
})
elixerBtn.addEventListener("click", () => {
    if(!disableButtons){
        let sortedCards = sortByElixir()
        showColors = false
        displayList(sortedCards)
        applyFilter()
    }
    
})
random.addEventListener("click", () => {
    let card = cards[Math.floor(Math.random()*cards.length)];
    document.getElementById("our-image").innerHTML = 
        "<img src=\""+ card.image+ "\"></img>" 
    document.getElementById("description").innerHTML = card.description
    document.getElementById("name-and-requirement").innerHTML = ""
    document.getElementById('card-name').innerHTML = card.name.charAt(0).toUpperCase()+card.name.slice(1)
})
//search filter bar
searchForm.addEventListener('submit', (e) => {
    e.preventDefault()
})
searchBar.addEventListener('keyup', (e) => {
    e.preventDefault()
    filterTerm = e.target.value.toLowerCase()
    applyFilter()
})
//apply filter 
function applyFilter(){
    const ourlist = document.querySelector('#our-list ul')
    const listItems = ourlist.getElementsByTagName('li')
    Array.from(listItems).forEach((li) => {
        const name = li.firstElementChild.textContent
        if(name.toLowerCase().indexOf(filterTerm) != -1){
            li.style.display = 'block'
        } else {
            li.style.display = 'none'
        }
    })
}
//sort by rarity
function sortByRarity() {
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

    return commons
}
//sort by alphabet
function sortByAlphabet(){
    let list = []
    if(showCards){
        list = cards
    } else {
        list =  arenas
    }
    return list.sort((a,b) =>{
        if(a.name < b.name){
            return -1
        }
        if(a.name >b.name){
            return 1
        }
        return 0
    })
}
//sort by elixir
function sortByElixir(){
    return cards.sort((a,b) => {
        if(a.elixirCost < b.elixirCost) {
            return -1
        }
        if(a.elixirCost < b.elixirCost){
            return 1
        }
        return 0
    })
}
//create list out of card names in html and add to 
function displayList(sortedList){
    let col1 = '<ul>'
    sortedList.forEach((li, i) => {
        if(showCards) {
            if(showColors){
                if(li.type == "common"){
                    col1 +='<li><span style="color: #638AC8;">'+ li.name + '</span></li>'
                } else if(li.type == "rare"){
                    col1 +='<li><span style="color: #FF7800;">'+ li.name + '</span></li>'
                } else if(li.type == "epic"){
                    col1 +='<li><span style="color: #AC1FF8;">'+ li.name + '</span></li>'
                } else {
                    col1 +='<li><span style="color: #FF01EF;">'+ li.name + '</span></li>'
                }
            } else {
                col1 +='<li><span>'+ li.name + '</span></li>'
                //col1 +='<li><span>'+ card.name + '</span><span class="elixirCost">'+ card.elixirCost +'</span></li>'
                //col1 +='<li><span class="elixirCost">'+ card.elixirCost +'</span><span>&nbsp;'+ card.name + '</span></li>'
            }
        } else {
            col1 +='<li><span>'+ li.name + '</span></li>'
        }
    })
    col1 += '</ul>'
    document.getElementById("list-col-1").innerHTML = col1
    //display card info 
    displayInfo()
}
function displayInfo(){
    const itemList = document.querySelector('#our-list ul')
    const  listItems= itemList.getElementsByTagName('li')
    Array.from(listItems).forEach((c, i) => {
        const itemName = c.textContent.replace(/[0-9]/g, '')
        let result = []
        if(showCards){
            result = cards.filter(obj => {
                return obj.name === itemName
              })
        } else {
            result = arenas.filter(obj => {
                return obj.name === itemName
              })
        }
        c.addEventListener("click", (e) =>{
            if(showCards){
                document.getElementById("description").innerHTML = result[0].description
                document.getElementById("name-and-requirement").innerHTML = "" 
                document.getElementById("card-name").innerHTML = result[0].name.charAt(0).toUpperCase() + result[0].name.slice(1);
            } else {
                if(result[0].name == "Training Camp"){
                    document.getElementById("name-and-requirement").innerHTML = result[0].name +'<br>'+
                    '<span>Tutorial</span>'
                } else {
                    document.getElementById("name-and-requirement").innerHTML = result[0].name +'<br>'+result[0].required + 
                    '<span class="has-text-warning">&nbsp;<i class="fas fa-trophy"></i></span>'
                }
                document.getElementById("description").innerHTML = ""
                document.getElementById("card-name").innerHTML = ""
            }
            document.getElementById("our-image").innerHTML = 
            "<img src=\""+ result[0].image+ "\"></img>"    
       })
    })
}
function clearDisplay() {
    document.getElementById("description").innerHTML = ""
    document.getElementById("card-name").innerHTML = ""
    document.getElementById("name-and-requirement").innerHTML = ""
    document.getElementById("our-image").innerHTML = ""
}
