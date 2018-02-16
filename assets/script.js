$(document).ready(function() {

  $.ajax({
    url: 'https://api.qwant.com/api/search/images?count=20&offset=1&q=forest',
    method: "GET"
    }).done(function() {
      console.log("success");

      photo = data.result.items.first().media

      $('.main-picture').attr('src', photo)

    })

  $('.gallery img').click(function(e){
    e.preventDefault()

    var photoSelect = $(this).attr('src');
    $('.main-picture').attr('src', photoSelect);
  })

});
