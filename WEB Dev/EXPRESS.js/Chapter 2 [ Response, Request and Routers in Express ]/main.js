const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))  // publicing the file to audience


//====================================================================


// ROUTING :- to seperate the endpoint of url 

const Hanime = require('./routes/hanime')
app.use('/hanime' , Hanime);

const Anime = require('./routes/anime')     
app.use('/anime' , Anime)


//===================================================================


// Handling post & other requests >>>>>>>>>>>>>>

// 1. METHODS 1 : for request

app.get('/', (req, res) => {            //GET CAN BR CHECKED without index.html directly through node like we do for [put,delete,post]
    console.log('hey get here');
    res.send('Hello World GET!')
})


app.post('/', (req, res) => {
    console.log('hey post here');
    res.send('Hello World Post! ')
})


app.put('/', (req, res) => {
    console.log('hey put here');
    res.send("Hello Put here!")
})


app.delete('/', (req, res) => {
    console.log('hey delete here');
    res.send("Hello delete here!")
})


//=================================================================


// 2. METHODS 2 : Chaining of requests >>>>>>>>

// app.get('/', (req, res) => {
//     console.log('hey get here');
//     res.send('Hello World GET!')

// }).post('/', (req, res) => {
//     console.log('hey post here');
//     res.send('Hello World Post! ')

// }).put('/', (req, res) => {
//     console.log('hey put here');
//     res.send("Hello Put here!")

// }).delete('/', (req, res) => {
//     console.log('hey delete here');
//     res.send("Hello delete here!")
// })



// ============================================================================


// Serving HTML files  >>>>>>>>>>  

//for more see in img


app.get('/htmlfile' , (req,res)=>{
    console.log('printing html file');

    res.sendFile('public/index2.html' , {root:__dirname})    // imp syntax for servicing html by req

    console.log('done');
    
})

app.get('/json' , (req,res)=>{
    console.log('printing JSON text');

    res.json([1,2,3,4,5])    // imp syntax for servicing json any

    console.log('done');
    
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

