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

       function initMap() {
        let location = {lat: 52.636576, lng: -1.113813};
        let map = new google.maps.Map(document.getElementById("map"), {
            zoom: 16,
            center: location
        });
        let marker = new google.maps.Marker({
            position: location,
            map: map
        });
    }

//Arabic to English Buttons
$(function() {
    $('.btn-english').click(
        function() {
            $('.arabic').hide();
            $('.english').show();
        });
    $('.btn-arabic').click(
        function() {
            $('.english').hide();
            $('.arabic').show();
        });
});

$(function() {
    $("#language-toggle").click(
        function() {
            $(".text-on").switchClass(
                "text-on",
                "text-off",
                10);
            $(".text-off").switchClass(
                "text-off",
                "text-on",
                10);
        });
});
