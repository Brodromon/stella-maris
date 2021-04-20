const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
})

app.get('/getbook', (req, res) => {
    conn.query('SELECT * FROM stella_maris_rebuild.book', (err, response) => {
        res.status(200).json(response)
    })
})





app.use(express.static(path.resolve(__dirname, 'public')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(8181, () => console.log('listeming on port 8181'))