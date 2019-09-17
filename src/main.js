
let containerWelcome = document.getElementById('welcome');

let firstScreen = ` 
<div class= "center"> <img src="https://i.ibb.co/MpDfd2g/Sin-t-tulo-1.png" style="width: 70%;" align="center"> </div>
<div class="row">
<div class="carousel col l6">
  <a class="carousel-item" href="#one!"><img src="https://image.tmdb.org/t/p/w500/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg"></a>
  <a class="carousel-item" href="#two!"><img src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"></a>
  <a class="carousel-item" href="#three!"><img src="https://image.tmdb.org/t/p/w500/zaFa1NRZEnFgRTv5OVXkNIZO78O.jpg"></a>
  <a class="carousel-item" href="#four!"><img src="https://image.tmdb.org/t/p/w500/qLeje0AueCpJBDW7pmg4Gv7cO1h.jpg"></a>
  <a class="carousel-item" href="#five!"><img src="https://image.tmdb.org/t/p/w500/on9JlbGEccLsYkjeEph2Whm1DIp.jpg"></a>
</div>
  <div class="carousel col l6">
  <a class="carousel-item" href="#one!"><img src="https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"></a>
  <a class="carousel-item" href="#two!"><img src="https://image.tmdb.org/t/p/w500/56zTpe2xvaA4alU51sRWPoKPYZy.jpg"></a>
  <a class="carousel-item" href="#three!"><img src="https://image.tmdb.org/t/p/w500/ai0LXkzVM3hMjDhvFdKMUemoBe.jpg"></a>
  <a class="carousel-item" href="#four!"><img src="https://image.tmdb.org/t/p/w500/9cJETuLMc6R0bTWRA5i7ctY9bxk.jpg"></a>
  <a class="carousel-item" href="#five!"><img src="https://image.tmdb.org/t/p/w500/tSGWhSResV2Cnqqr91TGKyZzf79.jpg"></a>
	</div>
</div>`;
window.onload = containerWelcome.innerHTML = firstScreen;
let btn = document.getElementById('search');

btn.addEventListener('click', () => {
    containerWelcome.style.display = 'none';
    let year = document.getElementById('year').value;
    let title = document.getElementById('title').value;
    let type = document.getElementById('selectfilm').value;
    let url = 'https://www.omdbapi.com/?s=' + title + '&y=' + year + '&apiKey=5648970a';
    if (type != '') {
        url += '&type=' + type;
    }
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response == "True") {
                let cardContainer = document.getElementById("id1");
                let text = '';
                console.log(data);
                data.Search.forEach(function(element) {
                    text += `
<div class="col l3" >
	<div class="card large" class="card-title">
		<div class="card-image">
					<img src="${element.Poster}">
				</div>
		<div class="card-content">
​
									<p><span class="card-title">${element.Title}</span></p>
									
									<p>${element.Year}</p>
									<a class="waves-effect waves-light btn modal-trigger" id="${element.imdbID}"href="#modal-${element.imdbID}">Ver más</a>
				</div>
				</div>
			</div>
​
				
			<div id="modal-${element.imdbID}" class="modal">
				<div class="modal-content">
					<div class="row"> 
​							<div class="col s12 s4 m4 l4 ">
								<div class="align-image">
						<img src="${element.Poster}">
						</div>
					</div>
​
				<div class="class="col s4 m4 l4" id="modal-body${element.imdbID}">
					</div> 
​
		</div>
​
	<div class="modal-footer">
				<a href="#!" class="waves-effect waves-light btn modal-close ">Cerrar</a>
					</div>
				</div>
	</div>`;


                });
                cardContainer.innerHTML = text;
                var elems = document.querySelectorAll('.modal');
                var instances = M.Modal.init(elems);
                let btnModals = document.querySelectorAll('.modal-trigger');
                btnModals.forEach(function(element) {
                    element.addEventListener('click', () => {
                        console.log(element.id);
                        fetch('https://www.omdbapi.com/?i=' + element.id + '&apiKey=5648970a')
                            .then(response => response.json())
                            .then(respuesta => {
                                console.log(respuesta);
                                let modalNew = document.getElementById('modal-body' + element.id);
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
                            });
                    });
                });
            } else {
                alert("Llena el campo de titulo");
            }
        })
        .catch(err => console.log(err));

});

let secondScreen = ` 
<div>
	<form class="col s12">
		<div class="row">
			<div class="input-field col s3">
				<select id="genre"class="input-field col s4" style="display: block;">
					<option value="">ninguno</option>
					<option value="28">Action</option>
					<option value="12">Adventure</option>
					<option value="16">Animation</option>
					<option value="35">Comedy</option>
					<option value="80">Crime</option>
					<option value="18">Drama</option>
					<option value="99">Documentary</option>
					<option value="10751">Family</option>
					<option value="14">Fantasy</option>
					<option value="36">History</option>
					<option value="27">Horror</option>
					<option value="10402">Music</option>
				</select>
			</div>
			<div class="input-field col s3">
				<input type="text" id="title" name="" placeholder="Ingrese Título del film"  >
			</div>
      <div class="input-field col s3 ">
				<select id="order"class="input-field col s4" style="display: block;">
					<option value="">Popularidad</option>
					<option value="asc">Ascendente</option>
					<option value="desc">Descendente</option>
				</select>
			</div>
			<div class="input-field col s3 ">
			<div> <a  id="search-advanced" style="margin-right: 20px;" class="waves-effect waves-light btn yellow">&nbsp;&nbsp;&nbsp;Iniciar Búsqueda&nbsp;&nbsp;&nbsp;</a></div>
			</div>
		</div>
		</form>
</div>

<section>
	<div class="row" id="id2">
		<div class="col s12 m4 l5" >
		</div>
	</div>
</section>`;

let advancedSearch = document.getElementById('advanced-search');
advancedSearch.addEventListener('click', () => {
    let container = document.getElementById('divone');
    container.innerHTML = secondScreen;
    let btnAdvanced = document.getElementById('search-advanced');
    btnAdvanced.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        if (title != '') {
            let newUrl = 'https://api.themoviedb.org/3/search/movie?api_key=662724e1bb4b69079def10cb9e11e4ef&query=' + title;
            console.log(newUrl);

            fetch(newUrl)
                .then(response => response.json()
                    .then(data => {
                        let order = document.getElementById('order').value;
                        let condition = document.getElementById('genre').value;
                        if (condition == '' && order == '') {
                            showCards(data.results);
                        } else {
                            let filtrado;
                            let isFiltered = false;
                            if (condition != '') {
                                filtrado = window.data.filterData(data.results, condition);
                                isFiltered = true;
                            }
                            if (order != '') {
                                if (isFiltered) {
                                    filtrado = window.data.sortData(filtrado, order);
                                } else {
                                    filtrado = window.data.sortData(data.results, order);
                                }
                            }
                            showCards(filtrado);
                        }
                        var elems = document.querySelectorAll('.modal');
                        var instances = M.Modal.init(elems);
                        let btnModals = document.querySelectorAll('.modal-trigger');
                    })
                    .catch(err => console.log(err)));
        } else {

            alert("Ingresa un título");
        }
    });
});

function showCards(dataToPrint) {
    let cardContainer = document.getElementById("id2");
    let text = '';
    console.log(dataToPrint);
    dataToPrint.forEach(function(element) {
        let textFirstGenre = getGenreText(element.genre_ids[0]);
        text += `
		<div class="col l3" >
			<div class="card medium" class="card-title">
				<div class="card-image">
					<img src="https://image.tmdb.org/t/p/w500${element.poster_path}">
					</div>
				<div class="card-content">
				<p><span class="card-title">${element.title}</span></p>
				<p>${textFirstGenre}</p>
				<a class="waves-effect waves-light btn modal-trigger" id="${element.id}" href="#modal2-${element.id}">Ver más</a>
			</div>
		</div>
	</div>
	
	<div id="modal2-${element.id}" class="modal">
		<div class="modal-content">
			<div class="row"> 
				<div class="col s12 s4 m4 l4 ">
						<div class="align-image">
							<img src="https://image.tmdb.org/t/p/w500${element.poster_path}">
						</div>
					</div>
					
					<div class="class="col s4 m4 l4" id="modal-body${element.id}">
						<table class="responsive-table">
						<thead>
						<tr>
						<th>Título:</th>
						<td>${element.title}</td>
						</tr>
						<tr>
						<th>Título Original:</th>
						<td>${element.original_title}</td>
						</tr>
						<tr>
						<th>Año Lanzamiento:</th>
						<td>${element.release_date}</td>
						</tr>
						<tr>
						<th>Reseña:</th>
						<td>${element.overview}</td>
						</tr>
						</thead>
						<tr>
						<th>Género:</th>
						<td>${textFirstGenre}</td>
						</tr>
						</table>
						</div> 
					</div>
					
					<div class="modal-footer">
						<a href="#!" class="waves-effect waves-light btn modal-close ">Cerrar</a>
			</div>
		</div>
	</div>`;
    });

    cardContainer.innerHTML = text;
}

function getGenreText(id) {
    var genres = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western'
    };
    return genres[id];
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
});

	containerWelcome.style.display='none';
	let year = document.getElementById('year').value;
	let title =document.getElementById('title').value;
	let type = document.getElementById('selectfilm').value;
	let url= 'https://www.omdbapi.com/?s='+title+'&y='+year+'&apiKey=5648970a';
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

									<p><span class="card-title">${element.Title}</span></p>
									
									<p>${element.Year}</p>
									<a class="waves-effect waves-light btn modal-trigger" id="${element.imdbID}"href="#modal-${element.imdbID}">Ver más</a>
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
		   			fetch('https://www.omdbapi.com/?i='+element.id+'&apiKey=5648970a')

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


let secondScreen = `  <div >
		<form class="col s12">
      <div class="row">
        <div class="input-field col s3">
          <select id="genre"class="input-field col s4" style="display: block;">
        <option value="">ninguno</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="18">Drama</option>
        <option value="99">Documentary</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
        <option value="36">History</option>
        <option value="27">Horror</option>
        <option value="10402">Music</option>
        
      	</select>
           
        </div>
      <div class="input-field col s3">
       <input type="text" id="title" name="" placeholder="Ingrese Título del film"  >
      </div>
      <div class="input-field col s3 ">
        <select id="order"class="input-field col s4" style="display: block;">
        <option value="">Popularidad</option>
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
        
        
      	</select>
	      </div>
	      <div class="input-field col s3 ">
	    <div> <a  id="search-advanced" style="margin-right: 20px;" class="waves-effect waves-light btn yellow">&nbsp;&nbsp;&nbsp;Iniciar Búsqueda&nbsp;&nbsp;&nbsp;</a></div>
	   </div>

	      </div>

	    </form>
     
       
    	</div>

    	<section >
        <div class="row" id="id2">
            <div class="col s12 m4 l5" >
              
            </div>
        </div>
	    	</section>
		`

let advancedSearch = document.getElementById('advanced-search');

advancedSearch.addEventListener('click', () => {

	let container = document.getElementById('divone');

	container.innerHTML= secondScreen;
	let btnAdvanced = document.getElementById('search-advanced');

btnAdvanced.addEventListener('click', () => {
	let title = document.getElementById('title').value;

	if (title != '') {

		let newUrl = 'https://api.themoviedb.org/3/search/movie?api_key=662724e1bb4b69079def10cb9e11e4ef&query='+title;
		console.log(newUrl)

		fetch(newUrl)

		.then(response => response.json())


		.then(data => {
				let order = document.getElementById('order').value;
				


				let condition = document.getElementById('genre').value;
				if(condition == '' && order == ''){
					showCards(data.results);
				}
				else{
					let filtrado;
					let isFiltered = false;
					if (condition != '') {
						filtrado = window.data.filterData(data.results,condition);
						isFiltered =true;
					}
					if (order != '') {

						if (isFiltered) {
							filtrado = window.data.sortData(filtrado,order);
						}
						else{
							filtrado = window.data.sortData(data.results,order);
						}
					}
					showCards(filtrado)
				}




				
				
			  	var elems = document.querySelectorAll('.modal');
			    var instances = M.Modal.init(elems);

			    let btnModals = document.querySelectorAll('.modal-trigger');
			
				


				

		})
		.catch(err => console.log(err));
	}
	else{
		alert("Ingresa un título");
	}

});

});



function showCards(dataToPrint){
	let cardContainer = document.getElementById("id2");
	let text ='';
	console.log(dataToPrint);
	dataToPrint.forEach(function(element){
		let textFirstGenre = getGenreText(element.genre_ids[0]);
		 text += `
					<div class="col l3" >
				      <div class="card medium" class="card-title">
				        <div class="card-image">
				          <img src="https://image.tmdb.org/t/p/w500${element.poster_path}">
				          
				        </div>
				        <div class="card-content">

									<p><span class="card-title">${element.title}</span></p>
									<p>${textFirstGenre}</p>
									<a class="waves-effect waves-light btn modal-trigger" id="${element.id}" href="#modal2-${element.id}">Ver más</a>
									
									
				        </div>
				      </div>
			    	</div>

				
				<div id="modal2-${element.id}" class="modal">
				    <div class="modal-content">
				      	
				    
					    <div class="row"> 

						    <div class="col s12 s4 m4 l4 ">
								<div class="align-image">
						      	<img src="https://image.tmdb.org/t/p/w500${element.poster_path}">
						      	</div>
						   	</div>

					    	<div class="class="col s4 m4 l4" id="modal-body${element.id}">
					    	<table class="responsive-table">
										        <thead>
										          <tr>
										          	<th>Título:</th>
										            <td>${element.title}</td>
										          
										              
										          </tr>
										          <tr>
										            <th>Título Original:</th>
										            <td>${element.original_title}</td>
										              
										          </tr>
										          <tr>
										            <th>Año Lanzamiento:</th>
										            <td>${element.release_date}</td>
										              
										          </tr>
										          <tr>
										            <th>Reseña:</th>
										            <td>${element.overview}</td>
										              
										          </tr>
										        </thead>

										        <tr>
										            <th>Género:</th>
										            <td>${textFirstGenre}</td>
										              
										          </tr>
											</table>
					    	</div> 

					    </div>

					    <div class="modal-footer">
					      	<a href="#!" class="waves-effect waves-light btn modal-close ">Cerrar</a>
					    </div>
				    </div>
				</div>`;
				

	});
	cardContainer.innerHTML= text;
}


function getGenreText(id){
	const genres = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',
		18:'Drama',10751:'Family',14:'Fantasy',36:'History',27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',
		878:'Science Fiction',10770:'TV Movie',53:'Thriller',10752:'War',37:'Western'};
	return genres[id];
}

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });


