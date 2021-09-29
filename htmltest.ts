const express2 = require('express')
const http = require('http');

const fs2 = require('fs');

const app = express2()
const port = 4000;
const server = http.createServer(app);

app.get('/socket', (req, res) => {
    res.sendFile(__dirname + '/Sample.html');
  
  });
  app.get('/style', (req, res) => {
    res.sendFile(__dirname + '/Style.css');
  
  });
  app.get('/socket.io', (req, res) => {
    res.sendFile(__dirname + '/node_modules/socket.io/client-dist/socket.io.js');
  
  });
  

  // Create an HTTPS service identical to the HTTP service.
 server.listen(port, function () {
    console.log('Example app listening on port'+ port);
  });
