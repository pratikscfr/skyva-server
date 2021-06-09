require('dotenv').config();
const constant = require('../utils/constants');
const accountSid = constant.TWILIO_ACCOUNT_SID;
const authToken = constant.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const User = require('../models/userSchema');

exports.sendOtpSms = (req, res, next) => {
	const { phoneNo, countryCode, email } = req.body;
	if (!email) {
		return res.status(402).json({ message: 'email required' });
	}
	if (!phoneNo || !countryCode) {
		return res.status(403).json({ message: 'phone no required' });
	}

	//   VAf804f75894571cbfa97535a816270ac1;
	const ph = `+${countryCode}${phoneNo}`;
	console.log(ph);

	client.verify
		.services(constant.TWILIO_SERVICE_ID)
		.verifications.create({ to: ph, channel: 'sms' })
		.then((response) => {
			res
				.status(200)
				.json({ message: `A verfication code has been sent to ${ph}` });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'something went wrong' });
		});
};

exports.verifyOtp = async (req, res, next) => {
	const { phoneNo, countryCode, otp, email } = req.body;

	if (!otp) {
		return res.status(402).json({ message: 'please enter otp' });
	}
	if (!phoneNo || !countryCode) {
		return res.status(403).json({ message: 'phone no required' });
	}
	const ph = `+${countryCode}${phoneNo}`;

	client.verify
		.services(constant.TWILIO_SERVICE_ID)
		.verificationChecks.create({ to: ph, code: otp })
		.then(async (verification_check) => {
			if (verification_check.status === 'approved') {
				const user = await User.findOne({ email: email });
				user.isPhoneVerified = true;
				user
					.save()
					.then((result) =>
						res
							.status(200)
							.json({ message: 'phone no is successfully verified' }),
					)
					.catch((err) =>
						res.status(500).json({ message: 'something went wrong' }),
					);
			} else res.status(401).json({ message: 'otp does not match' });
		})
		.catch((err) => res.status(500).json({ message: 'something went wrong' }));
};
