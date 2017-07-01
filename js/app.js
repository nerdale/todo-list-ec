class Model{
  constructor(array){
    this.todoList = [];
  }
  delete(){}

}

class Controller{
  constructor(){
    this.model = new Model();
    this.view = new View(this);
  }
  initKeys()
  {
    var self = this;
    var input = document.getElementById("tarea");
    window.onkeypress = function(e)
    {
      if (e.key === "Enter")
      {
        self.view.add();
        console.log(input.value);
      }
    }
  }
}

class View{
  constructor(controller){
    this.controller = controller;
  }
  add(){
      var valor = document.getElementById('tarea').value;
      var padre = document.getElementById("hacer");
      var hijo = document.createElement("div");
      var botonCompletado = document.createElement("button");
      botonCompletado.classList.add('boton1');
      var nodoBotonCompleto = document.createTextNode("Completado");
      var botonEliminar = document.createElement("button");
      var nodoBotonEliminar = document.createTextNode("Borrar");
      var list = document.createElement("li");
      var p = document.createElement("p");
      p.setAttribute("id" , "lista");
      var text_list = document.createTextNode(valor);
      botonEliminar.appendChild(nodoBotonEliminar);
      botonCompletado.appendChild(nodoBotonCompleto);
      p.appendChild(text_list);
      list.appendChild(p);
      list.appendChild(botonCompletado);
      list.appendChild(botonEliminar);
      hijo.appendChild(list);
      padre.appendChild(hijo);
  }
  complete(){
    var boton1 = document.getElementsByClasName("boton1")[0];
    boton1.addEventListener("click", function(){
      var parr = document.getElementById("lista");
      parr.classList.toggle("tachado");
    })
  }
}

var c = new Controller();
c.initKeys();