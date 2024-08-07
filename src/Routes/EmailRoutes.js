const express = require("express");
const route = express.Router();
const {sendOtp}=require('../Controller/Email')

route.route('/sendEmail').post(sendOtp)

module.exports = route;