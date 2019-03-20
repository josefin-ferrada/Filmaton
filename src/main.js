

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
	          <span class="card-title">Card Title</span>
	          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
	        </div>
	        <div class="card-content">
	          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
	        </div>
	      </div>
	    </div>
	  </div>`;

	 });

  	cardContainer.innerHTML= text;

 

})
.catch(err => console.log(err));
})


