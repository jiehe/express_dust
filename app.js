var express=requre('express'); 
var app = express(); 
app.get('heelo.txt', function(req, res){
  res.send('hello world')
})
var server = app.listen(3000, function() {
  console.log('listen on port %d', server.address().port);
})

