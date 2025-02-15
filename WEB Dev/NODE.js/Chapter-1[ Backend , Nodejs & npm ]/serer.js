console.log('helo world');

// if we want to run JS file as backend in NODEjs -->  node .\serer.js


// for making the js file an entity make them as  npm project -->  npm init

//a package.json is maded which contains all the info of our JS FILE --> which is an node packages manager ( NPM )
                                              //                     --> contains all the node js code /logic [like - slugify file] madded by unknown user & and we our just using it in our main node file
                                               //                    --> such file our store in NODE_MODULES file
                                                //                   --> we can install node_mode with [ npm install ]



//1.] Node.js is the runtime environment for executing JavaScript on the server side,
//     while npm is a tool to manage third-party libraries and packages to speed up development.

//2.]  Combining both gives you a powerful environment to build scalable applications with pre - built,
//     reusable solutions from the npm ecosystem.

//3.]  Using only Node.js will make your project more complex and slow down development since you'll have to write everything from scratch. 
//     On the other hand, npm relies on Node.js to run, so it’s impossible to use npm packages without it.  


//eg of the express function or use in our main file

// IF TYPE IF PROJECT IN ON Comman JS:-

// const express = require('express')
// const a = require('node:fs')
// const app = express()
// const port = 9000

// app.get('/', (req, res) => {
//   res.send('Hello Wo rld! ')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// if the project is MODULE[ECMA -script]

import http from 'http'

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Worlddwdw\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




//npm Commands (Short List) :-

// npm init: Create package.json.
// npm install <package>: Install a package.
// npm install: Install all dependencies.
// npm uninstall <package>: Remove a package.
// npm update: Update all dependencies.
// npm outdated: List outdated packages.
// npm run <script>: Run a script from package.json.
// npm audit: Check for security vulnerabilities.
// npm list: List installed packages.
// npm cache clean --force: Clear npm cache.


// Node.js Commands (Short List):-

// node <file>: Run a JS file.
// node -v: Show Node.js version.
// node: Start Node.js REPL.
// node --inspect <file>: Debug a script.
// node --help: Show help for Node.js commands.


// Other Useful Commands:-

// npm start: Run the start script.
// npm test: Run the test script.