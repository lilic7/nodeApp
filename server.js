var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongooose');

mongoose.connect('mongodb://localhost/nodeApp');


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

var adminRouter = express.Router();

adminRouter.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

adminRouter.get('/', function (req, res) {
    res.send('Admin panel page');
})

adminRouter.get('/users', function (req, res) {
    res.send('All users');
});



adminRouter.param('name', function (req, res, next, name) {
    if(name.length < 3 ){
        req.error = "Short name";
    } else {
        req.name = name;
    }
    console.log("Making validation on name param " + name);

    next();
})

adminRouter.get('/hello/:name', function(req, res){
    res.send(req.error ? req.error : 'hello ' + req.name);
});

adminRouter.get('/users/:name', function(req, res){
    res.send('hello ' + req.params.name + "!");
});


adminRouter.get('/posts', function (req, res) {
    res.send("All posts here");
});


app.route('/login')
    .get(function(req, res){
        res.send('login form');
    })
    .post(function(req, res){
        console.log('processing');
        res.send('process login form');
    });


app.use('/admin', adminRouter);

app.listen(1337);
console.log("Visit http://localhost:1337");