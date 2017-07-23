var bodyParser = require('body-parser');
var data = [{item:"get milk"},{item:"walk dog"},{item:"Do something"}];
var urlencdedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){
//routes
app.get('/todo',function(req, res){
 res.render('todo',{todoList:data});
});


app.post('/todo',urlencdedParser,function(req, res){
  data.push(req.body);
  console.log(req.body);
  res.json(data);
});
app.delete('/todo',function(req, res){

});
};
