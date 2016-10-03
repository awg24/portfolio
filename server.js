var express = require('express');
var path = require('path');
var helmet = require('helmet');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("*", function(req, res){
	res.redirect("/");
});

app.listen(PORT, function(){
	console.log("Listening on "+ PORT);
});