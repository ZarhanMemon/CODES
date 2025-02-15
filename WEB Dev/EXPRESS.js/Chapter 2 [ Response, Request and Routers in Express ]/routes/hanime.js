const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('Welcome to Hanime!')
})

// define the home page route
router.get('/home', (req, res) => {
  res.send('Hanime home page')
})

// define the about route
router.get('/about/:slug', (req, res) => {
  res.send(`About Hanime ${req.params.slug}`)
})

module.exports = router