
class Model{
	//constructor del modelo con un arreglo vacío, al que pretendiamos pushearle las tareas, no alcanzamos :(
	constructor(array){
		this.todoList = [];
	}
}
// se crea la clase controller en la cual se llama al modelo y la vista
class Controller{
	// el constructor llama como propiedades la clase model y clase view
	constructor(){
		this.model = new Model();
		this.view = new View(this);
	}
	// se inicializa metodo del controlador sobre el input que llama al metodo de la vista (metodo add).
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
}

// en la clase vista instanciamos el controlador e inicializamos los metodos dentro de este
class View{
	constructor(controller){
		this.controller = controller;
		//inicializo los metodos de borrar y completar. Lo habíamos llamado en el controlador pero no nos funcionó y lo inicializamos en la vista, Ricardo nos dijo xD.
		this.initDelete();
		this.initCompleted();
	}
	//metodo agregar que valida si el input está vacío de lo contrario crea los elementos necesarios
	add(){
		var task = $('#input_text').val();
		if(task == ''){
			alert('Debes escribir algo');
		}else{
			$('#contenedor').append('<div><i class="material-icons done">done</i><span id="nuevaTarea">' + task + '</span><i class="material-icons delete">delete_forever</i></div>');
			$('#input_text').val('');
		}
	}
	//metodo que borra la tarea. Utiliza on vinculando el evento click al document y que cuando le haga click al elemento del document ocurra lo indicado en la función
	initDelete(){
		$(document).on('click', '.delete', function(){
			console.log($('.delete').parent());
			$(this).parent().remove();
		})
	}
	//metodo que completa la tarea. Utiliza on vinculando el evento click al document y que cuando le haga click al elemento del document ocurra lo indicado en la función
	initCompleted(){
		$(document).on('click', '.done', function(){
			$('#nuevaTarea').addClass('.color');
				$($(this).parent()).appendTo('#hechas');
		})
	}
}
//se instancia la clase controlador y se inicializa
var c = new Controller;
c.initKeys();