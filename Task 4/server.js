const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // TODO: Check the username and password against a database

  if (username === 'admin' && password === 'password') {
    // Login successful
    res.redirect('/dashboard');
  } else {
    // Login failed
    res.status(401).send('Unauthorized');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
