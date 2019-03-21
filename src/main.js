
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
		 text += ` <div class="card">
		 <div class="card-image waves-effect waves-block waves-light">
			 <img class="activator" src="${element.Poster}">
		 </div>
		 <div class="card-content">
			 <span class="${element.Title}" text-background black">${element.Title}<i class="material-icons right">more_vert</i></span>
			 <p>${element.Year}</p>
		 </div>
		 <div class="card-reveal">
			 <span class="card-title #cfd8dc blue-grey lighten-4">Card Title<i class="material-icons right">close</i></span>
			 <p>Here is some more information about this product that is only revealed once clicked on.</p>
		 </div>
	 </div>`
	 });

  	cardContainer.innerHTML= text;

 

})
.catch(err => console.log(err));
})
