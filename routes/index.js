var express = require('express');
var router = express.Router();
var Synology = require('synology');
var syno = new Synology({
    host    : 'host',
    user    : 'user',
    password: 'pass'
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/blocked', function(req,res) {
	if(syno) console.log(syno);
	syno.dsm.info(function(err,result){
		if(err) throw err;
		res.send(result);
	});
	//res.send(['hello','hi']);
});

module.exports = router;
