const express=require('express');
const app=express();
const ejs=require('ejs');
const path=require('path');
const expressLayout=require('express-ejs-layouts');

// We're adding the node-sass module
const sass = require('node-sass'); 

const PORT=process.env.PORT || 5500

//Assets


app.use(express.static('public'))
// if(process.env.PORT){
//     PORT=process.env.PORT
// }



app.get('/',(req,res)=>{
    // res.send('Hello from server');
    // res.render('Hello from server');
    res.render('home');
})

app.get('/cart',(req,res)=>{
 res.render('customers/cart');
})

app.get('/login',(req,res)=>{
    res.render('auth/login');
})
app.get('/register',(req,res)=>{
    res.render('auth/register');
})


//set Template engine
app.use(expressLayout);
app.set('views' ,path.join(__dirname,'/resources/views'));

app.set('view engine','ejs');





app.listen(5500,()=>{
    console.log('Listening on port 5500');
})