$(document).ready(function () {
  const amenityIds = {};

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data('id');

    amenityIds[amenityId] = this.checked;

    $('.amenities h4').text(Object.keys(amenityIds).join(', '));
  });
});
