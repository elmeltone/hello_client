var unirest = require('unirest');

unirest.get('https://echoserver-elmeltone.c9users.io/').end(function(response) {
  console.log('Status:', response.statusCode);
  console.log('Headers: ', response.headers);
  console.log('Body:', response.body);
});