const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://127.0.0.1:5500',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'c_strap_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err.stack);
        throw err;
    }
    console.log('Connected to MySQL database as id', connection.threadId);
});

app.get('/', (req, res) => {
    res.send('Root endpoint reached successfully.');
});

app.get('/test', (req, res) => {
    res.send('Test endpoint reached successfully.');
});

app.post('/accommodation_inquiry', (req, res) => {
    const formData = req.body;
    console.log('Received form data:', formData);  // Add this line to log the form data

    const { name, email, institution } = formData;

    const query = 'INSERT INTO accommodation_inquiries (name, email, institution) VALUES (?, ?, ?)';
    connection.query(query, [name, email, institution], (err, result) => {
        if (err) {
            console.error('Error inserting data into database:', err.stack);
            res.status(500).send('Error inserting data into the database');
            return;
        }
        res.send('Accommodation inquiry data successfully submitted to the database!');
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
