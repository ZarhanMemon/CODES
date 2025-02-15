
const express = require('express')

const app = express()
const port = 5000

// app.get or app.post or app.put or app.delete( path, function handler )

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})


app.get('/dbz' , (req, res)=>{
   res.send('this is dbz info');
})

app.get('/naruto' , (req,res)=>{
    res.send('this is naruto info');
})


app.get('/bleach' , (req,res)=>{
    res.send('this is bleach info');
})


// Drawback : we have to create n number of .get code for particular get url


//Solution:- by using slug as variable in get url

// 4] Request.parameters and queries  

app.get('/blog/:slug', (req, res) => {            // :slug i variable it can be any [ :name ]

    // console.log(req);                        // req.params -> object --> contain as params.slug & queries in it


    // For URL: http://localhost:5000/bleach?%20mode=dark

    res.send(req.params)     //    params: { slug: 'zarhan' },
    res.send(req.query)      //     query: { mode: 'dark' }

    res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



// 5] Static Files --> for making the file or content publiclly

app.use(express.static('public'))
