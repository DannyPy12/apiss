require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

pool.getConnection((err, connection) => {
  if (!err) {
    console.log('Conectado a la base de datos MySQL');
    connection.release();
  } else {
    console.error('No está conectado, error:', err);
  }
});

setInterval(() => {
  pool.query('SELECT 1', (error) => {
    if (error) {
      console.error('Error manteniendo la conexión activa:', error);
    }
  });
}, 30000); // Cada 30 segundos

module.exports = pool;
