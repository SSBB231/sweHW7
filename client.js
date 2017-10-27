const fetch = require('node-fetch');

//	Send	data	to	remote	service
fetch("localhost:5000/users/")
    .then(function(res)
    {
        document.getElementById().innerHTML = res.htmlText;
    })
    .catch(function(res){});