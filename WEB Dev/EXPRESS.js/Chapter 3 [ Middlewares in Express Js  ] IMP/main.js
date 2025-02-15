const express = require('express')
const app = express()
const port = 3000
const fs = require('node:fs')
const anime = require('./routes/anime')


app.use(express.static('public'))    // Built-in-MiddleWare 

app.use('/anime' , anime)           // Routing-MiddleWare 



// Middlewear -1 for after request
app.use((req, res, next) => {

    // res.send('heelooo')               NOTE:- // if we use then it show error why u use next() if you send the response

    fs.appendFileSync('tracking.txt', `date : ${Date.now()} \n `)

    console.log(req.headers);

    req.headers.info = 'NARUTO';

    console.log('LOGGED')
    next()
})

app.use('/' , (req,res,next)=>{

    console.log(req.headers);    // CONTAINS info = 'NARUTO'
    console.log('Test 1')
    next()                    // without it the request will get no further path to go for getting response
})

app.use('/' , (req,res,next)=>{    
    console.log('Test 2')
    next()
})


app.get('/', (req, res) => {    //stop of middlewear bcz the res is there here if url is matches with it route req
    res.send('Hello World!')
})


app.get('/maths', (req, res) => {

    res.send('Heello Maths padonge ' + req.headers.info)
})

app.get('/physics', (req, res) => {
    res.send('Heello physics padonge')
})


// app.use((req, res, next) => {    // Middlewear -2 for after response  NOT WORKS BCS ITS USE BEFORE RESPONSE ONLY
    
//     console.log('LOGGED out ')
//     next()
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})