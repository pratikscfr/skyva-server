require('dotenv').config();
const PORT_NUMBER = 4000;

module.exports = {
	PORT_NUMBER,
	SENDGRID_KEY:process.env.SENDGRID_KEY,
	TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
	TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
	TWILIO_SERVICE_ID: process.env.TWILIO_SERVICE_ID,
};
