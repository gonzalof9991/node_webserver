const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.PORT;

const hbs = require('hbs');
// ----------------- Handlebars -----------------
// Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// ----------------- Handlebars -----------------

// Middleware - Servir contenido estático
app.use(express.static('public'));

app.get('/',  (req, res) =>  {
    res.render('home', {
        nombre: 'Gonzalo Falfán',
        titulo: 'Curso de Node'
    });
});
app.get('/generic',  (req, res) =>  {
    res.render('generic', {
        nombre: 'Gonzalo Falfán',
        titulo: 'Curso de Node'
    });
});

app.get('/elements',  (req, res) =>  {
    res.render('elements', {
        nombre: 'Gonzalo Falfán',
        titulo: 'Curso de Node'
    });
});
app.get('*',  (req, res) =>  {
    res.sendFile(__dirname + '/public/404.html');

});

app.listen(port,  () =>  {
    console.log(`Example app listening at http://localhost:${port}`)
});