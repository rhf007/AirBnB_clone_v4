$(document).ready(function () {
  const amenityIds = {};

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data('id');

    amenityIds[amenityId] = this.checked;

    $('.amenities h4').text(Object.keys(amenityIds).join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    if (status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
