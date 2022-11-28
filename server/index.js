const express = require('express');
const bodyParser = require('body-parser');
const port = 3303;

const app = express();
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.json({data: `New message from server`})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});