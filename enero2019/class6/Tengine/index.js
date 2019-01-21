const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hola')
})

const prof = [
    {
        nombre: 'arturo'
    },
    {
        nombre: 'lucas'
    },
    {
        nombre: 'pinky'
    },
    {
        nombre: 'santi'
    }
]
app.get('/testejs/:id', (req, res) => {
    res.render('test.ejs', prof[req.params.id] )
})

app.get('/profesores', (req, res) => {
    res.render('profesores.ejs', { list: prof })
})



app.listen(3000, () => console.log('listening in port 3000'))