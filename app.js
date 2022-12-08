const express = require('express')

const app = express();

app.use(express.static('public'))

app.get('/home', (request,response) =>  { 
    response.sendFile(__dirname + '/views/home.html')

})

app.listen(3004, () => console.log('connected'))