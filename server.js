const express = require('express');
const MongoClient = require('Mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
MongoClient.connect(db.url, (err, database)=>{
		if(err) return console.log(err);

		require('./app/routes')(app, database)
		app.listen(port, () => {
		console.log("We are live on port " + port);
		});
});
