$(document).ready(function () {
    let amenityIds = {};
  
    $('input[type="checkbox"]').change(function () {
      let amenityId = $(this).data("id");
  
      amenityIds[amenityId] = this.checked;
  
      $(".amenities h4").text(Object.keys(amenityIds).join(", "));
    });
  });