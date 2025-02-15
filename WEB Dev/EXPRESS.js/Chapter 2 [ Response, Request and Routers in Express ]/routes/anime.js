const express = require('express')
const router = express.Router()
 
router.get('/',(req,res)=>{
    res.send('Welcome to anime!')
})

// define the home page route
router.get('/home', (req, res) => {
  res.send(`Anime home page`)
})

// define the about route
router.get('/about/:slug', (req, res) => {
  res.send(`About anime name ${req.params.slug}`)
})

module.exports = router