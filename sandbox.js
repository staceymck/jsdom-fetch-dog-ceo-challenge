console.log('%c HI', 'color: firebrick')

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => addImages(json));
}

function addImages(images) {
  const div = document.getElementById("dog-image-container");
  images.message.forEach(image => {
    const img = document.createElement("img");
    img.src = image;
    div.appendChild(img);
  })
}

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(json => {

    breeds = Object.keys(json.message);
    setBreedList(breeds);
    addFilterFeature();
  });
}

function setBreedList(breeds) {
  const ul = document.getElementById("dog-breeds");
  
  breeds.forEach(breed => {
    const li = document.createElement("li");
    li.innerText = breed;
    li.style.cursor = "pointer";
    li.addEventListener("click", function(e){
      e.target.style.color = "blue";
    })
    ul.appendChild(li);
  })
}

function matchByFirstLetter(breed) {
  
}

function find(array, criteriaFn) {
  const filteredBreeds = [];
  for (let i = 0; i < array.length; i++) {
    if (criteriaFn(array[i])) {
      console.log("true");
      filteredBreeds.push(array[i]);
    }
  }
  console.log(filteredBreeds);
} 

function addFilterFeature(breeds) {
  const dropdown = document.getElementById("breed-dropdown");
  dropdown.addEventListener("change", function(e){
    find(breeds, e.target.value);
  });
}

document.addEventListener("DOMContentLoaded", function(){
  //fetchImages();
  fetchBreeds(); 
})