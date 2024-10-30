const db = require('../config/database');

const validateUser = (username, password, callback) => {
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      // Handle the database error
      callback(err, null);
    } else if (result.length === 0) {
      // User not found in the database
      callback(null, false);
    } else {
      // User found in the database
      callback(null, true);
    }
  });
};

module.exports = { validateUser };
