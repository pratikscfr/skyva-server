const express = require('express');
const router = express.Router();
const sendSmsOtpUsers = require('../../controllers/sendSmsOtpUsers');

router.post('/sendotp', sendSmsOtpUsers.sendOtpSms);
router.post('/verifyotp', sendSmsOtpUsers.verifyOtp);

module.exports = router;
