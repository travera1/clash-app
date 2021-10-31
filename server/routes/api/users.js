const { Router } = require('express')
const User = require('../../models/User')

const router = Router()

router.get('/', async (req, res) => {
    try {  
        const users = await User.find()
        if(!users) throw new Error('No users')
        const sorted = users.sort((a,b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        })
        res.status(200).json(sorted)
    } catch (error) {
        res.status(500).json( { message: error.message })
    }
}) 

router.post('/', async (req, res) => {
    const newUser = new User(req.body)
    try {
        const user = await newUser.save()
        if(!user) throw new Error('Something went wrong saving the user')
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json( { message: error.message })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const response = await User.findByIdAndUpdate(id, req.body) 
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
        const removed = await User.findByIdAndDelete(id)
        if(!removed) throw new Error('Something went wrong')
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json( { message: error.message } )
    }
})

module.exports = router