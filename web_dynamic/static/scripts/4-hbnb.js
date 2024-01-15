$(document).ready(function () {
    let amenityIds = {};
  
    $('input[type="checkbox"]').change(function () {
      let amenityId = $(this).data("id");
  
      amenityIds[amenityId] = this.checked;
  
      $(".amenities h4").text(Object.keys(amenityIds).join(", "));
    });

    $.get("http://0.0.0.0:5001/api/v1/status/", function(data, status)
	{
        if (status === "OK") {
            $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
	});

    $.post({url:'http://0.0.0.0:5001/api/v1/places_search/',
    contentType:'application/json', data: '{}', succes: function (data) {
        data.forEach(function (place) {
            let description = place.description.replace(/\[Owner\]/g, '');

            let article = $('<article>').append(
                $('<h2>').text(place.name),
                $('<div>').text(description),
                $('<div>').text('Price: $' + place.price_by_night)
            );

            $('section.places').append(article);
        });
    }});

    $('button').click(function () {
        let checkedAmenities = $('input[type="checkbox"]:checked');
        let amenityIds = checkedAmenities.map(function () {
            return $(this).data('id');
        }).get();
        $.post({
            url: 'http://0.0.0.0:5001/api/v1/places_search',
            contentType: 'application/json',
            data: JSON.stringify({ amenities: amenityIds }),
            success: function (data) {


                data.forEach(function (place) {
                    let description = place.description.replace(/\[Owner\]/g, '');

                    let article = $('<article>').append(
                    $('<h2>').text(place.name),
                    $('<div>').text(description),
                    $('<div>').text('Price: $' + place.price_by_night)
            );

            $('section.places').append(article);
                });
            }});
  });
});