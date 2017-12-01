(function(){

  let menuButton = document.getElementById("menu");
  let navMenu = document.getElementById("navMenu");

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

          function myMap() {
          var mapProp= {
              center:new google.maps.LatLng(41.653419,-73.577499),
              zoom:5,
          };
          var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
          }
