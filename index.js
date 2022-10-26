const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors")

const homeData = require("./Data/homeData.json");
// const categories = require("./Data/categories.json");
const courses = require("./Data/courses.json");


app.use(cors())



app.get('/',(req,res) =>{
    res.send('Data api running')
});

app.get('/homeData', (req,res) =>{
    res.send(homeData)
})

// app.get('/courses-categories', (req,res) =>{
//     res.send(categories)
// })

app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find((course) => course._id === id);
    res.send(selectedCourse);
  });

app.listen(port, () =>{
    console.log('Server is running on port', port);
})