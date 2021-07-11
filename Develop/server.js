 
const express = require('express');
const fs = require('fs');
const path = require('path');
// const notes =  require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

// router files..give server a map of how to respond when users visit or request data from various URLs. 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

//code to 'start server', listening for port
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });