var arreglo = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }];


var resultado = [];
var contTarea = document.getElementsByClassName("listaTareas")[0];

 for (i=0; i < arreglo.length;i++)
{
 resultado.push(arreglo[i])
}

resultado.forEach(function(el){
  contTarea.innerHTML += "<li>" + el.title + "/ " + el.completed + "</li>";
  });
  

  function agregarTarea(){
  	var input = document.getElementById("add-tarea");
  	contTarea.innerHTML += "<li>" + input.value + "</li>";
  	if(input.length > 0)
  	{
  		if(agregarLista(input))
  		{
  			var li= document.createElement('li');

  		}
  	} return false;
  }


  function agregarLista(contenido){
  	var el = document.getElementById("lista").getElementByTagName("li");
  	for (var i = 0; i < el.length; i++) {
  		if (el[i].innerHTML == contenido)
  			return false;
  	}
  	return true;
  }
  

  //var item = document.createElement("li");

