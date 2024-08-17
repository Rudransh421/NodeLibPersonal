/*
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost', // Database host
    user: 'root',      // Database username
    password: '',      // Database password
    database: 'mydatabase' // Database name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

module.exports = connection;

// npm i mysql2

// example :

// import connection from file 

// Example route to get data from the database
app.get('/data', (req, res) => {
    connection.query('SELECT * FROM mytable', (err, results) => {
        if (err) {
            return res.status(500).send('Error retrieving data');
        }
        res.json(results);
    });
});

// Example route to insert data into the database
app.post('/data', (req, res) => {
    const { name, value } = req.body;
    connection.query('INSERT INTO mytable (name, value) VALUES (?, ?)', [name, value], (err, results) => {
        if (err) {
            return res.status(500).send('Error inserting data');
        }
        res.status(201).send('Data inserted');
    });
});

// Start the server

*/

// but it is recomended to use pool of connection then single connection

const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',     // Database host
    user: 'root',          // Database username
    password: '',          // Database password
    database: 'mydatabase',// Database name
    connectionLimit: 10    // Maximum number of connections in the pool
});

// Export the pool
module.exports = pool.promise(); // Use the promise API for async/await support


app.get('/data', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM mytable');
        res.json(rows);
    } catch (err) {
        res.status(500).send('Error retrieving data');
    }
});

app.post('/data', async (req, res) => {
    const { name, value } = req.body;
    try {
        await pool.query('INSERT INTO mytable (name, value) VALUES (?, ?)', [name, value]);
        res.status(201).send('Data inserted');
    } catch (err) {
        res.status(500).send('Error inserting data');
    }
});
