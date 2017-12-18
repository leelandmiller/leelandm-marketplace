/** ENV VARIABLES **/
require('dotenv').config();

const express    = require('express'),
      bodyParser = require('body-parser');

const ENV  = process.env.NODE_ENV || 'development',
      PORT = process.env.PORT || 3001,
      app  = express();

/** Express Middleware **/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes'));

/** Start server **/
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
