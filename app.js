var express = require("express"); 
var app = express(); 

app.set('view engine', 'ejs'); 

app.get('/', function(req, res) {
	res.render('home');
}); 

app.get('/contact', function(req, res){
	res.render('contact'); 
}); 

app.listen(process.env.PORT || 3000, process.env.IP, () => {
	console.log("server up - temp portfolio - "); 
}); 