(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("nav-menu");

  menuButton.addEventListener("click", toggleMenu);

  let toggle = false; // hidden at first
  function toggleMenu(){
    if (toggle) { // true: it's visible
      navMenu.classList.remove("show-menu"), // hide it
      toggle = false
    }
    else { // false: it's hidden
      navMenu.classList.add("show-menu"), // show it
      toggle = true
    }
  }



})();

function initMap() {
  let location = {lat: 52.636576, lng: -1.113813};

  //This sets the default location for when the map is first loaded on the website.
  let map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: location
  });
  let marker = new google.maps.Marker({
      position: location,
      map: map
  });
}
