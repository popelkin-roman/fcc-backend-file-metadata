const express = require('express');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser')


const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.use(bodyParser.urlencoded({extended: true}));
app.post('/api/fileanalyse', (req, res) => {
  
  // const fileInfo = {
  //   name,
  //   type,
  //   size
  // }
  // res.json(fileInfo)
  // req.body.upfile
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
