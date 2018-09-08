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
