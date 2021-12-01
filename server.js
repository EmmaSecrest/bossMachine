const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const apiRouter = require('./server/api');

module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

//the server Boilerplate
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'));

// Mount your existing apiRouter below at the '/api' path.
app.use('./server/api.js',apiRouter)
app.use('/public', express.static('public'));
app.get('/', (req, res, next) => { 
  res.sendFile('index.html', { root: __dirname });
});

// This conditional is here for testing purposes:
if (!module.parent) { 
     app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
  })
  }
 
