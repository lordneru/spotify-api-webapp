var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.set('port', process.env.PORT || 500);

app.listen(app.get('port'), function() {
    console.log('Express NodeJS listing on port ' + app.get('port'));
})