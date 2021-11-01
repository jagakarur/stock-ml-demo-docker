import express from 'express';

const app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
});


app.listen(4000, () => {
  console.log('server running on port 4000');
});
