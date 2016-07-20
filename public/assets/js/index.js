// load the express package and create our app
var express = require('express');
var app = express();
var path = require('path');

//app.use("/public",express.static(__dirname));
app.use(express.static(__dirname));
// send our index.html file to the user for the home page
app.get('/', function(req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
});

// start the server
app.listen(1337);
console.log('1337 is the magic port!');

var adminRouter = express.Router();

//app.use('/admin', adminRoutes);

adminRouter.get('/users/:name', function(req, res) {
res.send('hello ' + req.params.name + '!');
});
