


function getTitle(){
  let title =document.getElementById('title').value;
  

}
function getYear(){
  let year = documnet.getElementById('year')
}

let url = 'http://www.omdbapi.com/?s=twilight&apikey=5648970a'

fetch(url)

.then(response => response.json())
.then(data => {
  console.log(data)
})
.catch(err=>console.log(err))