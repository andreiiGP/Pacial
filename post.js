const request = require('request');

const json = {
    "name": "Geovanny Poveda",
    "email": "pedro@geovanny.me",
};

request.post({
    url: 'http://localhost:3000/tickets',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});
