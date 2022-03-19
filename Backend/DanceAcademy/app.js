// const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactDance');

// define Mongoose Schema
let contactSchema = new mongoose.Schema({
    name:String,
    phone: String,
    email:String,
    address: String,
    desc : String
});

// compiling the schema  into model  
let Contact = mongoose.model('Contact', contactSchema);

// saving into the db 
mehakKitty.save();


const port = 8000;

// serving static file
app.use('/static', express.static('static'));
// using middleware to add the data of the form to the express 
app.use(express.urlencoded())

app.use(express.urlencoded());

// template engine as pug
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//endpoints 
app.get('/', (req, res) => {
    res.status(200).render('home.pug')
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
})

app.post('/contact', (req, res) => {
    form = req.body;
    console.log(form);
    console.log(form.name);

    // Now we are adding the data to the new file 
    // this is for adding data into the file 

    let formOutput = `form1={
                                name: ${form.name}
                                age: ${form.phone}
                                email: ${form.email}
                                address: ${form.address}
                                desc: ${form.desc}
    }`
    fs.writeFileSync('formOutput.txt', formOutput);
    const params = { 'message': 'Your Form has been submitted sucessfully' }
    res.status(200).render('contact.pug', params);
})

app.post('/contact', (req, res) => {
    form = req.body;
    // Now we are adding the data to the new file 
   
    let formOutput = `form1={
                                name: ${form.name}
                                age: ${form.phone}
                                email: ${form.email}
                                address: ${form.address}
                                desc: ${form.desc}
    }`
    fs.writeFileSync('formOutput.txt', formOutput);


    const params = { 'message': 'Your Form has been submitted sucessfully' }
    res.status(200).render('contact.pug', params);
})




// running server 
app.listen(port, () => {
    console.log(`The application successfully started at  ${port}`);

})