
const accesskey = "Zeiq4rCwBORTIYzuYvHCfSHZMvKoJqYCjiQS74JT7JA";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("show_more_btn");

let keyword = "car, cake, cat, laptop";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=24`;

  const response = await fetch(url);
  const data = await response.json();

  let results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.style.cursor = "pointer"; // Make it look clickable

    // When user clicks image, open in new tab
    image.addEventListener("click", () => {
      window.open(result.urls.full, "_blank");
    });

    searchResult.appendChild(image);
  });
  searchMoreBtn.style.display = "block"

}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchResult.innerHTML = ""; // Clear old images
  searchImages();
});


  searchMoreBtn.addEventListener( "click", ()=>{
    page++;
    searchImages()
  })

function books() {
  alert("Apologies, it appears to be unavailable right now. In the meantime, you can search and find the images manually.");
}

function login(){
  window.location.href = "https://saifskd.github.io/LoginPage/"
}


// https://api.unsplash.com/search/users?page=1&query=car&client_id=Zeiq4rCwBORTIYzuYvHCfSHZMvKoJqYCjiQS74JT7JA  for cars