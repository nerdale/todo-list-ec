class Model{
	constructor(array){
		this.todoList = [];
	}
	delete(){};
}

class Controller{
	constructor(){
		this.model = new Model();
		this.view = new View(this);
	}
	initKeys(){
		var self = this;
		var input = $('#input_text');

		window.onkeypress = function(e){
			if(e.key ==="Enter"){
				self.view.add();
				return false;
			}
		}
	}

	erase(){
		var self = this;
		self.view.delete();
	}

	complet(){
		var self = this;
		self.view.completed();
	}
}


class View{
	constructor(controller){
		this.controller = controller;
		this.initDelete();
		this.initCompleted();
	}
	add(){
		var task = $('#input_text').val();
		if(task == ''){
			alert('Debes escribir algo');
		}else{
			$('#contenedor').append('<div><i class="material-icons done">done</i><span id="nuevaTarea">' + task + '</span><i class="material-icons delete">delete_forever</i></div>');
			$('#input_text').val('');
		}
	}
	initDelete(){
		
		$(document).on('click', '.delete', function(){

			console.log($('.delete').parent());
			$(this).parent().remove();
			//$('.delete').find('div').remove();
		})
	}

	initCompleted(){
		$(document).on('click', '.done', function(){
			$('#nuevaTarea').addClass('.color');
				$($(this).parent()).appendTo('#hechas');
		})
	}
}

var c = new Controller;
c.initKeys();
c.erase();
c.complet();




