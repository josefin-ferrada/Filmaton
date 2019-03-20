

let btn = document.getElementById('search');

btn.addEventListener('click', () => {

let year = document.getElementById('year').value;
let title =document.getElementById('title').value;
let type = document.getElementById('type').value;
let url= 'http://www.omdbapi.com/?s='+title+'&y='+year+'&plot=full&apiKey=5648970a';
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
	    <div class="col s12 m3">
	      <div class="card">
	        <div class="card-image">
	          <img src="${element.Poster}">
	          <span class="card-title">Card Title</span>
	          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
	        </div>
	        <div class="card-content">
	          <p>${element.imdbID}</p>
	          <p>'${element.Year}'</p>

	        </div>
	      </div>
	    </div>
	  </div>`;

	  let id = element.imdbID;
	  


	  console.log(data)
	 });

  	cardContainer.innerHTML= text;

 

})
.catch(err => console.log(err));
})


