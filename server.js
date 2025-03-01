const express = require('express');
const app = express();
const port = 3000;
var morgan = require('morgan')
morgan('tiny')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});