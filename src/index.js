const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const ini = require('ini')
const fs = require('fs');

const PORT = 8080;

const app = express();

var dbCredentials = ini.parse(fs.readFileSync('./private.ini', 'utf-8')).mysql;

app.use(bodyParser.json());

app.post('/log', function(req, res) {
	console.log(req.body);
	var connection = mysql.createConnection(dbCredentials);
	connection.query(
		"insert into temps set log_datetime=?, temp_f=?, humidity=?",
		[new Date(req.body.timestamp*1000), req.body.temperature, req.body.humidity],
		function(err, results) {
			console.log(err);
		}
	);
	connection.end();
	res.send('received');
});

app.listen(PORT, function() {
	console.log('Temp logger server live on port ' + PORT);
});

