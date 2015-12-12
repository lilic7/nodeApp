var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    mongoose    = require('mongoose'),
    port        = process.env.PORT || 8080,
    jwt         = require('jsonwebtoken'),
    superSecret = "IloveMEANmachine",
    User        = require('./app/models/user');

mongoose.connect('mongodb://localhost:27017/nodeApp');

app.use(bodyParser.urlencoded({'extended' : true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorisation');
    next();
});

app.use(morgan('dev'));

app.get('/', function(req, res){
    res.send('Welcome page');
});


apiRouter.get('/me', function(req, res){
    res.send(req.decoded);
});

app.use('/api', apiRouter);

app.listen(port);
console.log('visit localhost:8080');