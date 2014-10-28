$(window).scroll(function (event) {
  var y = $(this).scrollTop();

  if (y >= 300) {
    $('.second-graphic').addClass('animate');
    console.log(y);
  }

  if (y >= 500) {
    $('.third-graphic').addClass('animate');
    console.log(y);
  }

  if (y >= 700) {
    $('.fourth-graphic').addClass('animate');
    console.log(y);
  }
});
