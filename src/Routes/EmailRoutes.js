const express = require("express");
const route = express.Router();
const {sendOtp}=require('../Controller/Email')

route.route('/sendEmail').get(sendOtp)

module.exports = route;