var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/public/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    console.log("BASE");
    response.render('index');
});

app.get('/main', function(request, response) {
    console.log("MAIN!!!!!");
    response.render('main');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});