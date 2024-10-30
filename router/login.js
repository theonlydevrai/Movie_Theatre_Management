const express = require('express');
const router = express.Router();
const { validateUser } = require('../functions/login');
const db = require('../config/database');

router.get('/', (req, res) => {
  res.render('login');
});



router.post('/validate', (req, res) => {
  const { username, password } = req.body;

  validateUser(username, password, (err, isValid) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else if (isValid) {

      const sqlSelect = 'SELECT idusers FROM users WHERE username = ?';
      db.query(sqlSelect, [username], (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            error: 'An error occurred while retrieving the ID.'
          });
        }

        if (result.length === 0) {
          return res.status(404).json({
            error: 'Username not found.'
          });
        }

        res.send('<script>alert("Welcome"); window.location.href = "/login";</script>');
   
      });
    } else {
      res.send('<script>alert("Invalid username or password"); window.location.href = "/login";</script>');
    }
  });
});

module.exports = router;

