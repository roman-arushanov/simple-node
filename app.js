const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get ('/', (req, res) => res.send(' Hello Lyovik'));
app.listen (port, () => console.log('Server is rungin on port ' + port + '. You need to run too '));
