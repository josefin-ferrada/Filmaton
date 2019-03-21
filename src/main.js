

let btn = document.getElementById('search');

btn.addEventListener('click', () => {

let year = document.getElementById('year').value;
let title =document.getElementById('title').value;
let type = document.getElementById('type').value;
let url= 'http://www.omdbapi.com/?s='+title+'&y='+year+'&apiKey=5648970a';
if (type != '') {
	url += '&type='+type;

}

console.log(url)


fetch(url)

.then(response => response.json())


.then(data => {
	if (data.Response == "True"){
		let cardContainer = document.getElementById("id1");
		let text ='';
		console.log(data);
		data.Search.forEach(function(element){
			 text += `


			
			
				<div class="col l3" >
			      <div class="card large" class="card-title">
			        <div class="card-image">
			          <img src="${element.Poster}">
			          
			        </div>
			        <div class="card-content">

								<p><span class="card-title">${element.Title}</span>.</p>
								<a class="waves-effect waves-light btn modal-trigger" id="${element.imdbID}"href="#modal-${element.imdbID}">Ver más</a>
								<p>${element.Year}</p>
			        </div>
			      </div>
		    	</div>

			
			<div id="modal-${element.imdbID}" class="modal">
			    <div class="modal-content">
			      	
			    
				    <div class="row"> 

					    <div class="col s12 s4 m4 l4 ">
							<div class="align-image">
					      	<img src="${element.Poster}">
					      	</div>
					   	</div>

				    	<div class="class="col s4 m4 l4" id="modal-body${element.imdbID}">
				    	</div> 

				    </div>

				    <div class="modal-footer">
				      	<a href="#!" class="waves-effect waves-light btn modal-close ">Cerrar</a>
				    </div>
			    </div>
			</div>`;
			

		});

	  	cardContainer.innerHTML= text;
	  	var elems = document.querySelectorAll('.modal');
	    var instances = M.Modal.init(elems);

	    let btnModals = document.querySelectorAll('.modal-trigger');

	   	btnModals.forEach(function(element){
	   		element.addEventListener('click', () => {
	   			console.log(element.id);
	   			fetch('http://www.omdbapi.com/?i='+element.id+'&apiKey=5648970a')

	   			.then(response => response.json())

	   			.then(respuesta => {
		   			console.log(respuesta);
		   			let modalNew= document.getElementById('modal-body'+element.id);
		   			modalNew.innerHTML = `
		   								 <table class="responsive-table">
									        <thead>
									          <tr>
									          	<th>Título:</th>
									            <td>${respuesta.Title}</td>
									          
									              
									          </tr>
									          <tr>
									            <th>Año:</th>
									            <td>${respuesta.Year}</td>
									              
									          </tr>
									          <tr>
									            <th>Director:</th>
									            <td>${respuesta.Director}</td>
									              
									          </tr>
									          <tr>
									            <th>Reparto:</th>
									            <td>${respuesta.Actors}</td>
									              
									          </tr>
									        </thead>

									        <tr>
									            <th>Género:</th>
									            <td>${respuesta.Genre}</td>
									              
									          </tr>
										</table>`;
	   			})
	   		});
	    });
	}

	else{

		alert("Llena el campo de titulo")
	}


})
.catch(err => console.log(err));
})

