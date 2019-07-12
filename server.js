const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
