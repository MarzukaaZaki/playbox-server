const express = require('express');
const app = express();


// Middleware
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send('Playbox Server is Running!');
})

app.listen(port, ()=>{
    console.log(`Playbox server is running on port ${port}`);
})