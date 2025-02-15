const express = require('express')
const app = express()
const port = 3000

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express  --> ejs + express

// EJS (Embedded JavaScript) is a templating engine for Node.js that lets you embed JavaScript in HTML to generate dynamic web pages. It’s used to render server data into HTML templates.

// <%= %>: Output data (escaped).
// <%- %>: Output data (unescaped).
// <% if %>, <% for %>, <% foreach %>: Control structures (loops, conditionals).
// <%- include('file_name.ejs') %>: Include partial templates.
// <% var variable = %>: Declare local variables.


app.set('view engine', 'ejs');  //to use ejs use this syntax

app.get('/', (req, res) => {

    let hero_name = "Zarhan"
    let click = "Click to Search!"
    let arr = ["i", "me", "myself"]

    res.render("index", { hero_name: hero_name, click: click, arr })  //with this res to
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})