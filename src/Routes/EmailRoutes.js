const express = require("express");
const route = express.Router();
const {sendOtp,sendOtp2}=require('../Controller/Email')

route.route('/sendEmail').post(sendOtp)
route.route('/sendEmail2').post(sendOtp2)

module.exports = route;