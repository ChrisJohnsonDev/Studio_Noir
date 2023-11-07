const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// MySQL database connection config
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', 
    password: '',
    database: 'studio_noir', 
    port: 3306,
});

db.connect((err) => {
    if(err) {
        console.log('Error connecting to MySQL database:', err)
    } else {
        console.log('Connected to MySQL database!')
    }
});

app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Insert form data into the Messages table
    const sql = 'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err,result) => {
        if(err) {
            console.log('Error inserting data into MySQL', err);
            res.status(500).json({message: 'Internal Server Error'});
            return;
        } 

        console.log('Form data inserted into MySQL:', result);
        res.json({message: 'Form submitted successfully!'});
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

