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
