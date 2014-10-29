$(window).scroll(function (event) {
  var y = $(this).scrollTop();

  function animationClass() {
    $(this).addClass('animate-left');
  }

  if (y >= 300) {
    $('.second-graphic .box-left').addClass('animate');
    $('.second-graphic .box-right').addClass('animate');
  }

  if (y >= 500) {
    $('.third-graphic .box-left').addClass('animate');
    $('.third-graphic .box-right').addClass('animate');
  }

  if (y >= 700) {
    $('.fourth-graphic .box-left').addClass('animate');
    $('.fourth-graphic .box-right').addClass('animate');
  }
});

function animateBoxes(parent) {
 var firstSelector = parent + ' .box-left';
 var secondSelector = parent + ' .box-right';
 $(firstSelector).addClass('animate')
 setTimeout(function(){
   $(secondSelector).addClass('animate')
 }, 400)
}


if (y >= 300) {
 animateBoxes('.second-graphic')
}

if (y >= 500) {
 animateBoxes('.third-graphic')
}
