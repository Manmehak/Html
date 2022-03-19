// how to use pug
// Using plain html in pug 


const express = require('express');
const path = require('path');
const app = express();

const port = 1080;
// express related 
app.use('/static',express.static('static'));

// pug related
app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))

// endpoints
app.get('/' ,(req,res)=>{
    //sending the values of the vraible declared in the pug 
    // const con = "This is the best content on the internet";

    // sending data to the pug 
    // const params = {'title': 'Pug Documnetation','content': con};
    // res.status(200).render('index2.pug',params);

    res.status(200).render('index2.pug');
});

app.post('/',(req,res)=>{
    const params = {'message':'Your form has been submitted'}
    res.status(200).render('index2.pug',params);
});




app.listen(port, () => {
    console.log(`The application successfully started at  ${port}`);

})