const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors")

const homeData = require("./Data/homeData.json")


app.use(cors())



app.get('/',(req,res) =>{
    res.send('Data api running')
});

app.get('/homeData', (req,res) =>{
    res.send(homeData)
})

app.listen(port, () =>{
    console.log('Server is running on port', port);
})