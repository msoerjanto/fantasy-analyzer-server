const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Player = require('./api/models/PlayerModel'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/fantasy-analyzer');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

const routes = require('./api/routes/PlayerRoutes');
routes(app); // register the route

app.listen(port);

console.log('Server started on port: ' + port);

