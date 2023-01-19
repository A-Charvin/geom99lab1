// Initialize the map
let map;

function initMap() {
    const myLatLng = { lat: 50.036, lng: 8.560 };
    map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 2,
    mapTypeId: 'terrain'
  });

  // Define the flight path as an array of LatLng coordinates

  var flightPlanCoordinates = [
    {lat: 10.152, lng: 76.392, name: 'Cochin International Airport'},
    {lat: 23.601, lng: 58.289, name: 'Muscat International Airport'},
    {lat: 50.036, lng: 8.560, name: 'Frankfurt Airport'},
    {lat: 43.677, lng: -79.624, name: 'Toronto Pearson International Airport'}
];
  
  // Create the flight path on the map
  // Sources : https://developers.google.com/maps/documentation/javascript/examples/polyline-simple
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  flightPath.setMap(map);

    
  // Create a marker for the flight
  // Sources : https://developers.google.com/maps/documentation/javascript/examples/icon-simple
  var flightMarker = new google.maps.Marker({
    position: flightPlanCoordinates[0],
    map: map,
    icon: 'https://i.ibb.co/r0rtVBj/airplane.png'
  });
  
  // Define the animation for the marker
  // Sources : https://developers.google.com/maps/documentation/javascript/examples/marker-animations-iteration

    var flightPlanIndex = 0;
    function animateFlight() {
    var currentCoordinate = flightPlanCoordinates[flightPlanIndex];
    flightMarker.setPosition(currentCoordinate);
    map.setCenter(currentCoordinate);
    map.setZoom(8);
    map.setTilt(45);
    setTimeout(function(){
        map.setZoom(4);
        map.setTilt(0);
        flightPlanIndex = (flightPlanIndex + 1) % flightPlanCoordinates.length;
    },3000);
    }

    var intervalId = setInterval(animateFlight, 6000);

  // Add airport markers
  // Sources : https://developers.google.com/maps/documentation/javascript/adding-a-google-map
  // https://developers.google.com/maps/documentation/javascript/custom-markers

  
  flightPlanCoordinates.forEach(function(coordinate) {
    var airportMarker = new google.maps.Marker({
      position: coordinate,
      map: map,
      title: coordinate.name,
      animation: google.maps.Animation.DROP,
      icon: 'https://i.ibb.co/c39PGjG/airport.png'
    });
  
    // Add popup text box to airport markers
    // https://developers.google.com/maps/documentation/javascript/examples/overlay-popup

    var airportInfoWindow = new google.maps.InfoWindow({
      content: coordinate.name
    });
  
    airportMarker.addListener('click', function() {
      airportInfoWindow.open(map, airportMarker);
    });
  });
}