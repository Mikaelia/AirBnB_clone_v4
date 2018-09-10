$(function () {
  let amenityChecked = [];

  $('input').change(function () {
    if ($(this).is(':checked')) {
      let checked = $(this).attr('data-name');
      amenityChecked.push(' ' + checked);
    } else {
      amenityChecked.splice(-1, 1);
    }
    $('.amenities h4').text(amenityChecked);
  });
});

$.get('http://0.0.0.0:5001/api/v1/status/', function(response, textStatus) {
  if (textStatus === 'success') {
    $('#api_status').addClass('available');
  } else {
    $('#api_status').removeClass('available');
  }
});

$.ajax({
  type: 'POST',
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  data: '{}',
  contentType: 'application/json',
  success: function(response){
    for (let place of response) {
      $('.places').append(`<article>
	    <div class="title">
	      <h2>${place.name}</h2>
	      <div class="price_by_night">
		${ place.price_by_night }
	      </div>
	    </div>
	    <div class="information">
	      <div class="max_guest">
		<i class="fa fa-users fa-3x" aria-hidden="true"></i>
		<br />
		${ place.max_guest } Guests
	      </div>
	      <div class="number_rooms">
		<i class="fa fa-bed fa-3x" aria-hidden="true"></i>
		<br />
		${ place.number_rooms } Bedrooms
	      </div>
	      <div class="number_bathrooms">
		<i class="fa fa-bath fa-3x" aria-hidden="true"></i>
		<br />
		${ place.number_bathrooms } Bathroom
	      </div>
	    </div>
	    <!-- **********************
		 USER
		 **********************  -->
	    <div class="user">
	    </div>
	    <div class="description">
	      ${ place.description }
	    </div>
	  </article>`);
    }}});
