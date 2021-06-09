const sgMail = require('@sendgrid/mail');
const constants = require('./constants');
sgMail.setApiKey(
	'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',
);
const msg = {
	to: 'abhishekraj2772@gmail.com', // Change to your recipient
	from: '1828043@kiit.ac.in', // Change to your verified sender
	subject: 'Sending with SendGrid is Fun',
	text: 'and easy to do anywhere, even with Node.js',
	//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
const sent = () => {
	sgMail
		.send(msg)
		.then((r) => {
			console.log(r);
			console.log('Email sent');
		})
		.catch((error) => {
			console.error(error);
		});
};
sent();
