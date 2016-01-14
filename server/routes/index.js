var express = require('express');
var router = express.Router();
var request=require('request');
//var JSON = require('JSON');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api', function(req, res, next) {
  var b=req.body;  
  new Promise(function(resolve,reject){
  	console.log(b);
  	if(b.method==='get'){
  		request.get(b['body[href]'],function(error,response,body){
  			resolve(response);
  		});
  	}else if(b.method==='post'){
		request.post(b['body[href]'],function(error,response,body){
  			resolve(response);
  		});	
  	}else{
  		console.log('error');
  	}
  }).then(function(response){
  	//console.log(response);
  	  res.status(200).send({response:response});
  }).catch(function(er){
  	console.error(er);
  });
});

module.exports = router;
