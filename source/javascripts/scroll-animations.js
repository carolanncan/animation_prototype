$(window).scroll(function (event) {
  var y = $(this).scrollTop();
  var boxes = $( event.target ).children();
  var animation = boxes.addClass( "animate-left" );

  if (y >= 300) {
    $('.second-graphic img').scroll(animation);
    console.log(y);
  }

  if (y >= 500) {
    $('.third-graphic').addClass('animate-left');
    console.log(y);
  }

  if (y >= 700) {
    $('.fourth-graphic').addClass('animate-left');
    console.log(y);
  }
});
