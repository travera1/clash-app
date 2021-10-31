const { Router } = require('express')
const Deck = require('../../models/Deck')

const router = Router()

router.get('/', async (req, res) => {
    try {  
        const decks = await Deck.find()
        if(!decks) throw new Error('No decks')
        const sorted = decks.sort((a,b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json( { message: error.message })
    }
}) 

router.post('/', async (req, res) => {
    const newDeck = new Deck(req.body)
    try {
        const deck = await newDeck.save()
        if(!deck) throw new Error('Something went wrong saving the deck')
        res.status(200).json(deck)
    } catch (error) {
        res.status(500).json( { message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const response = await Deck.findByIdAndUpdate(id, req.body) 
        if(!response) throw new Error('Something went wrong')
        const updated = {...response._doc, ...req.body }
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json( { message: error.message } )
    }
})

router.delete('/:id', async(req, res) => {
    const { id } = req.params
    try {
        const removed = await Deck.findByIdAndDelete(id)
        if(!removed) throw new Error('Something went wrong')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json( { message: error.message } )
    }
})

module.exports = router