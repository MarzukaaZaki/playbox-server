// Import express from nodejs 
const express = require('express');
// Creating an instance of the express application
const app = express();


// Middleware
const cors = require('cors');
app.use(cors());
app.use(express.json());


// Defines port in which the server is to be launched
// During deployment it will assign any of the available ports to our server.
const port = process.env.PORT || 5000;

// Defining a URL and the response the users will get when they go to that url.
app.get('/', (req, res)=>{
    res.send('Playbox Server is Running!');
})

// Set the port at which the server should listen for incoming requests
app.listen(port, ()=>{
    console.log(`Playbox server is running on port ${port}`);
})