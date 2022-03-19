const express = require('express');
const path = require('path');
const app = express();

const port = 1080; //if we define 80 we dont need to write full server otherwise we will have to mention the port number

// serving static file  :
//  is like an public package that can be accessed by anyone ..
app.use('/static',express.static('static')); // last static is the folder name which we will make 
// first static is the url 
// this will only print the code .. doesnot execute it ..

// setting template engine as pug..
app.set('view engine', 'pug')

// set views directory 
app.set('views',path.join(__dirname,'views')) // third one is folder name

// pug demo 
app.get('/demo', (req,res)=>{
    // here we are givig the detailsof the title and the message we used in the template literal
    res.render('index', { title: 'Hey', message: 'Hello there!' });
})


app.get('/', (req, res) => {
    res.send("This is  my first express app..")
});

app.get('/about', (req, res) => {
    res.send("This is  my first express about app..")
});

app.get('/contact', (req, res) => {
    res.send("This is  my first express contact12 app..")
});

app.get('/services', (req, res) => {
    res.send("This is  my first express services app..")
});

//how to add post request 
app.post('/', (req,res)=>{
    res.send("My first post request using express")
});

// send status code and json 
app.get('/home',(req,res)=>{
    res.status(404).send('Sending status code ')
});


app.listen(port, () => {
    console.log(`The application successfully started at  ${port}`);

})
