//GET /quizes/question
exports.autor = function(req,res){
	res.render('author/creditos', {autor: 'Francisco Cardona'});
};