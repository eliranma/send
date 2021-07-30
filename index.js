const express = require('express');
const cokieParser =require('cookie-parser');
const app =express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// app.use(cookieParser());

const {sendEmail}= require('./mail');

app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET, POST, DELETE, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.post('/api/sendMail', (req, res)=>{
    console.log(req, res)
    sendEmail(req.body.clientName, req.body.clientTerminal, req.body.senderName, req.body.clientId, req.body.tpn, req.body.numDevices, req.body.shvaUser, req.body.shvaPass)
})
app.listen(4000, ()=>{
    console.log('Server Is Alive at 4000')
})