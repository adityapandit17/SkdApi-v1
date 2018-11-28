const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const bodyParser = require('body-parser');
const cors = require('cors');

// Intialize Mongo Module
require('./models/mongo.js');


// routes
const authRoutes = require('./routes/auth.routes');


app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(bodyParser.json({ extended: true, limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


app.use('/v0.1/', [
  authRoutes,
]);

app.listen(port, () => {
  console.error('SKD api on port ' + port + ' :)'); 
});

module.exports = app;
