

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
	let cardContainer = document.getElementById("id1");
	let text ='';

	data.Search.forEach(function(element){
		 text += `<div class="row">
		 <div class="col s12 m6">
	      <div class="card">
	        <div class="card-image">
	          <img src="${element.Poster}">
	          
	          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
	        </div>
	        <div class="card-content">
						<p><span class="card-title">${element.Title}</span>.</p>
						
						<p>${element.Year}</p>
	        </div>
	      </div>
	    </div>
		</div>`
		

	 });

  	cardContainer.innerHTML= text;

 

})
.catch(err => console.log(err));
})



				
/*
		
		 <div class="card">
		 <div class="card-image waves-effect waves-block waves-light">
			 <img class="activator" src="${element.Poster}">
		 </div>
		 <div class="card-content">
			 <span class="${element.Title} activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
			 <p><a href="#">This is a link</a></p>
		 </div>
		 <div class="card-reveal">
			 <span class="${element.Title}grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
			 <p>${element.Plot}</p>
		 </div>
		 </div>
		 */