

    var imagenes = [{id: 1, imagen: "1.jpg"},
		{id: 2, imagen: "2.jpg"}, {id: 3, imagen: "3.jpg"}, 
		{id: 4, imagen: "4.jpg"}, {id: 5, imagen: "5.jpg"},
		{id: 6, imagen: "6.jpg"}, {id: 7, imagen: "7.jpeg"},
		{id: 8, imagen: "8.jpeg"}, {id: 9, imagen: "9.jpeg"},
		{id: 10, imagen: "10.jpeg"}, {id: 11, imagen: "11.jpeg"},
		{id: 12, imagen: "12.jpeg"}, {id: 13, imagen: "13.jpeg"},
		{id: 14, imagen: "14.jpeg"}, {id: 15, imagen: "15.jpeg"},
		{id: 16, imagen: "16.jpg"}, {id: 17, imagen: "17.jpg"},
		{id: 18, imagen: "18.jpg"}, {id: 19, imagen: "19.jpg"},
		{id: 20, imagen: "20.jpg"}, {id: 21, imagen: "21.jpg"},
		{id: 12, imagen: "22.jpg"}, {id: 23, imagen: "23.jpg"},];
	
	var galeria = document.getElementById('galeria'); 

	for(imagen of imagenes){

		galeria.innerHTML += `
			<div class="card scrollflow -slide-bottom -opacity">
			    <a href="" data-toggle="modal" data-target="#id${imagen.id}">
			        <img src="img/${imagen.imagen}" class="card-img-top">
			    </a>
		    </div>

			<!-- Modal -->
			<div class="modal fade" id="id${imagen.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			    <button type="button" class="close mr-2" data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			    </button>
			    <div class="modal-dialog modal-dialog-centered" role="document">

			       	<img src="img/${imagen.imagen}" class="img-fluid rounded">
			          
			    </div>
			</div>
			`;
	}

	var componentes = [{id: 1, nombre: 'Ricardo "cacucho" Ribero', cargo: "Director Responsable", imagen: "cacucho.jpg"},
						{id: 2, nombre: 'Rodrigo Vargas', cargo: "Coordinador General", imagen: "rorro.jpg"},
						{id: 3, nombre: 'Charly Álvarez', cargo: "Cuerda de Primos", imagen: "charly.jpg"},
						{id: 4, nombre: 'Albino Almirón', cargo: "Cuerda de Primos", imagen: "albino.jpg"},
						{id: 5, nombre: 'Tabaré Molina', cargo: "Cuerda de Primos", imagen: ""},
						{id: 6, nombre: 'Sabastián Hernandez', cargo: "Cuerda de Primos", imagen: "seba.jpg"},
						{id: 7, nombre: 'Álvaro "riquelme" Denino', cargo: "Cuerda de Primos", imagen: "riquelme.jpg"},
						{id: 8, nombre: 'Eduardo Díaz', cargo: "Cuerda de Sobre Primos", imagen: "eduardo.jpg"},
						{id: 9, nombre: 'Nicolás Ríos', cargo: "Cuerda de Sobre Primos", imagen: "nico.jpg"},
						{id: 10, nombre: 'Sergio Ribero', cargo: "Cuerda de Segundos", imagen: "sergio.jpg"},
						{id: 11, nombre: 'Fernando Quimpos', cargo: "Cuerda de Segundos", imagen: ""},
						{id: 12, nombre: 'Rubens Monzón', cargo: "Cuerda de Segundos", imagen: "chiquitin.jpg"},
						{id: 13, nombre: 'Edén Iturrióz', cargo: "Cuerda de Segundos", imagen: "eden.jpg"},
						{id: 14, nombre: 'Javier Ferlat', cargo: "Cuerda de Segundos", imagen: "javi.jpg"},
						{id: 15, nombre: 'Andrés Atay', cargo: "Director Escénico y Arreglos Corales", imagen: "andres.jpg"},
						{id: 16, nombre: 'César "pitufo" García', cargo: "Batería (Platillos)", imagen: "pitufo.jpg"},
						{id: 17, nombre: 'Yoel Ribero', cargo: "Batería (Bombo)", imagen: "yoyo.jpg"},
						{id: 18, nombre: 'Christian "tele" Vasilj', cargo: "Batería (Redoblante)", imagen: "tele.jpg"}];

	var verComponentes = document.getElementById('componentes');

	for(componente of componentes){

		verComponentes.innerHTML +=`
			
			<div class="col-md-4 text-center mt-5 scrollflow -slide-top -opacity" id="${componente.id}">
		        <img src="img/componentes/${componente.imagen}" alt="" class="rounded-circle mt-4" width="200px" height="200px">
		        <h4 class="mt-3">${componente.nombre}</h4>
		        <p class="lead">${componente.cargo}</p>
		      </div>
		    </div>

		`;
	}

