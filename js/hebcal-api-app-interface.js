//import { OtherClass } from './../js/otherclass.js';


$(function() {
  $('#searchHebCalForm').submit(function(event) {
    event.preventDefault();
    $('.output').text("");

    let year = $('#inputYear').val();
    let month = $('#inputMonth').val();
    let geozip = $('#inputZipCode').val();
    $('#inputYear').val("");
    $('#inputMonth').val("");
    $('#inputZipCode').val("");

    //let request = new XMLHttpRequest();

    $.ajax({
      url: `http://www.hebcal.com/hebcal/?v=1&cfg=json&maj=off&min=off&mod=off&nx=off&year=${year}&month=${month}&ss=off&mf=off&c=on&geo=zip&zip=${geozip}&m=50&s=on`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        let responseArray = response.items;
        $('.output').append(`<div class="row"><div class="col-md-3">Shabbat Date</div><div class="col-md-3">Candle-Lighting Times</div><div class="col-md-6">Parshiot</div></div>`)
        //$('.output').append(`<div class='row'>${response}</div>`);
        responseArray.forEach(function(shabbat) {
          if (shabbat.category == "parashat") {
            $('.output').append(`<div class="row"><div class="col-md-3">${shabbat.date}</div>`);
            $('.output').append(`<div class="col-md-3">${shabbat.title}</div>`);
            $('.output').append(`<div class="col-md-6">${shabbat.title}</div></div>`);
          }
        });
      },
      // error: function() {
      //   ('#errors').text("There was an error processing your request.  Shalom.");
      // }
    });
  });
});

  //
  //   promise.then(function(response) {
  //       //let body = JSON.parse(response);
  //       let bikeResponse = JSON.parse(response);
  //       let bikeArry = bikeResponse.bikes;
  //       console.log(bikeArry);
  //       bikeArry.forEach(function(bike) {
  //         $('.output').append(`<ul><li>${bike.id}</li>`);
  //         $('.output').append(`<li>${bike.title}</li>`);
  //         $('.output').append(`<li>${bike.manufacturer_name}</li></ul>`);
  //       });
  //     }, function(error) {
  //       $('.showErrors').text(`There was an error: ${error.message}`);
  //     });
  // });
