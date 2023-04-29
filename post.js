const request = require('request');

const json = {
    "name": "andrei gonzalez",
    "email": "pedro@andru0829@gmail.com",
};

request.post({
    url: 'http://localhost:3000/tickets',
    body: json,
    json: true,
}, function (error, response, body) {
    console.log(body);
});
