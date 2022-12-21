const express = require('express');
const routes=express.Router();

const {sendMail} = require('../controller/mailcontroller')

routes.post("/sendmail", sendMail)
module.exports=routes;

