const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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
    console.log('Received form data:', formData);

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

app.post('/signup', (req, res) => {
    const { email, password } = req.body;

    const insertUserQuery = 'INSERT INTO users (email, password) VALUES (?, ?)';
    connection.query(insertUserQuery, [email, password], (error, results) => {
        if (error) {
            console.error('Error signing up:', error.stack);
            res.json({ success: false, message: 'Error signing up.' });
        } else {
            res.json({ success: true, message: 'Sign Up successful!' });
        }
    });
});

app.post('/signin', (req, res) => {
    const { email, password } = req.body;

    const findUserQuery = 'SELECT * FROM users WHERE email = ? AND password = ?';
    connection.query(findUserQuery, [email, password], (error, results) => {
        if (error) {
            console.error('Error signing in:', error.stack);
            res.json({ success: false, message: 'Error signing in.' });
        } else {
            if (results.length > 0) {
                res.json({ success: true, message: 'Sign In successful!' });
            } else {
                res.json({ success: false, message: 'Invalid credentials.' });
            }
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
