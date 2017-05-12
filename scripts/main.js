;(function($){
 'use strict';


 $('a[href*="#"]').on('click', function(){

  console.log('test')
  event.preventDefault();

  $('body').animate({
   scrollTop:$($(this).attr('href')).offset().top 

  }, 1600);

});
 
function createMap(){

    var $markers = $('.ba-marker');
    console.log($markers);  

    var map = new google.maps.Map( $('.ba-map')[0], {
      zoom: 14,
      center: new google.maps.LatLng(0,0)

    });

    addMarkers($markers, map);
    centerMap($markers, map);

  }

    function addMarkers( $markers, map ) {
      $markers.each( function(){
        var lat = $(this).data('lat');
        var lng = $(this).data('lng');
        var marker = new google.maps.Marker({
          position: { lat: lat, lng: lng},
          map: map,
        });
        var infoWindow = new google.maps.InfoWindow({
          content: 'Beetroot',
        });

        infoWindow.open(map, marker);
      });
        
        }
        
      function centerMap($markers, map) {

        
        var bounds = new google.maps.LatLngBounds();

        $markers.each( function(){
          var lat = $(this).data('lat');
          var lng = $(this).data('lng');
          var latLng = new google.maps.LatLng( lat, lng );
          bounds.extend(latLng);
        });
              map.fitBounds(bounds);

      }

     createMap();




})(jQuery);