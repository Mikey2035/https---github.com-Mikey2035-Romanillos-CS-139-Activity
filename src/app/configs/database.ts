import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',       // or your MySQL server's hostname
  user: 'root',            // MySQL username
  password: '',            // Leave empty if there's no password
  database: 'dbdb',   // Replace with your actual database name
});

export default db;