var models = require('../models/models.js');

//GET /quizes/question
exports.question = function(req,res){
	models.Quiz.findAll().success(function(quiz){
		res.render('quizes/question', {pregunta: quiz[0].pregunta});
	});
};

//GET /quizes/answer
exports.answer = function(req,res){
	models.Quiz.findAll().success(function(quiz){
		if(req.query.respuesta.toLowerCase() === quiz[0].respuesta.toLowerCase()){
			res.render('quizes/answer', {respuesta: 'Correcto'});
		}else{
			res.render('quizes/answer', {respuesta: 'Incorrecto'});
		}
	});
};

/*-----------------------------------------------------Before
//GET /quizes/question
exports.question = function(req,res){
	res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

//GET /quizes/answer
exports.answer = function(req,res){
	if(req.query.respuesta.toLowerCase() === 'roma'){
		res.render('quizes/answer', {respuesta: 'Correcto'});
	}else{
		res.render('quizes/answer', {respuesta: 'Incorrecto'});
	}
};
------------------*/