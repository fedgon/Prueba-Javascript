$(document).ready(function() {

  $.ajax({
    url:'https://cors-anywhere.herokuapp.com/https://api.qwant.com/api/search/images?count=20&offset=1&q=forest',
    method: "GET"
  }).done(function(data) {

    console.log(data)

    // $('.picture-1').attr('src', data.result.items[0].media);


    })

    $('.gallery img').click(function(e){
      e.preventDefault()

      var photoSelect = $(this).attr('src');
      $('.main-picture').attr('src', photoSelect);
   })





  // $('.picture').hover(function(){
  //
  //   var imageSelect = $(this).parent()
  //
  //   imageSelect.append('<h6>AUTO 1</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>')
  //
  // })

});
