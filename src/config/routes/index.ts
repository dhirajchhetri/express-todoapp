var express = require('express');

module.exports = function(app:any){
	// register route controllers
	var todo = require('../../routes/todo');
	var todoRouter = express.Router();
	app.use('/todos', todoRouter);

	todoRouter.get('/', todo.all);
	todoRouter.get('/:id', todo.viewOne);
	// todoRouter.post('/create', todo.create);
	// todoRouter.post('/destroy/:id', todo.destroy);
	// todoRouter.post('/edit/:id', todo.edit);
};