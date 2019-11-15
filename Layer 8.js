// Layer 8 
// The accoundSid and AuthToken can be acquired from Twilio and configured to perform phishing attacks
const accountSid = '<accountSid>';
const authToken = '<AuthToken>';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: '<message>',
     from: '<Phish>',
     to: '<target>'
   })
  .then(message => console.log(message.sid));