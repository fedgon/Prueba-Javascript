$(document).ready(function() {

  $.ajax({
    url:'https://cors-anywhere.herokuapp.com/https://api.qwant.com/api/search/images?count=20&offset=1&q=forest',
    method: 'GET',
    dataType: 'json',
      success: function(response) {

        console.log(response);

        var toHtml = "";

        response.data.result.items.forEach(function(itemFoto) {

          toHtml += '<div class="image-box">'+
          '<div class="picture" style="background-image: url('+ itemFoto.media +');background-size: cover;"></div>'+
          '<div class="wrapper hidden">'+
          '<h3 class="imag-name">'+ itemFoto.title +'</h3>'+
          '<p class="imag-size">'+ itemFoto.width + 'x' + itemFoto.height +'</p>'+
          '<a class="imag-url" href=""' + itemFoto.url + '">url</a>'+
          '</div>'+
          '</div>'

        })

        $('.gallery').html(toHtml)

    $('')
  }
  })
    // $('.picture-1').attr('src', data.result.items[0].media);

    $('.gallery').on('click', '.image-box .picture', function(e){
      e.preventDefault()

      var photoSelect = $(this).css('background-image');
      var anotherPhoto = photoSelect.split('"');
      // console.log(anotherPhoto[1])
      // <img class="main-picture" src="">

      $('.container').html('<img class="main-picture" src='+ anotherPhoto[1] + '>')
   })

  // $('.picture').hover(function(){
  //
  //   var imageSelect = $(this).parent()
  //
  //   imageSelect.append('<h6>AUTO 1</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>')
  //
  // })

});
