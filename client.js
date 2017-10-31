const fetch = require('node-fetch');

//	Send	data	to	remote	service
fetch("localhost:5000/users/:userID")
    .then(function(res)
    {

    })
    .catch(function(res){});