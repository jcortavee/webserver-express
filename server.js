// EXPRESS
const express = require('express');
const app = express();

// HBS
const hbs = require('hbs');
require('./hbs/helpers/helpers');

// Static files
app.use(express.static(__dirname + '/public'));

// Partials HBS
hbs.registerPartials(__dirname + '/views/partials/');

// Engine
app.set('view engine', 'hbs');


const port = process.env.PORT || 5014;


app.get('/', (req, res) => {

    /*let payload = {
        name: 'Jose',
        so: 'Windows'
    }
    res.send(payload);*/

    res.render('home', {
        name: 'Jose'
    });

});

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Carlos'
    });
});

app.listen(port, () => {
    console.log(`Listening in port: ${port}`);
});