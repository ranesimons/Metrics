const serverless = require('serverless-http');
const express = require('express');
const path = require('path');

const app = express();

// Serve files from the public folder
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/hello', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

module.exports.handler = serverless(app);
