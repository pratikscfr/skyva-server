const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
// console.log(accountSid);
// client.verify.services
//   .create({ friendlyName: "My First Verify Service" })
//   .then((service) => console.log(service));

// client.verify
//   .services("VA307ec96812f8882af7063c22e3612256")
//   .verifications.create({ to: "+919777925929", channel: "sms" })
//   .then((verification) => console.log(verification))
//   .catch((err) => console.log(err));

client.verify
  .services('VA307ec96812f8882af7063c22e3612256')
  .verificationChecks.create({ to: '+919777925929', code: '304878' })
  .then((verification_check) => console.log(verification_check.status))
  .catch((err) => console.log(err));
