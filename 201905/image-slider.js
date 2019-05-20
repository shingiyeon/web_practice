var width = 0;
$('.sliders').mouseleave( function() {
  var elem = $('.sliders > .progress-bar > .my-bar'); 
  var id = setInterval(frame, 100);
  function frame() {
    $('.sliders').mouseenter( function(){
        elem.css('width', width + '%'); 
        clearInterval(id);
    })
    if (width >= 100) {
        width = 0;
        var $current_slide = $('.sliders > .slides > .active');
        var next = ($current_slide.index()+1) % 3;
        $current_slide.removeClass('active');
        $('.sliders > .slides > .slide').eq(next).addClass('active');
        
    }
    else {
      width++; 
      elem.css('width', width + '%'); 
    }
  }
});

$('.sliders > .menu-bars > .bar').click(function(){
    width = 0;
    var elem = $('.sliders > .progress-bar > .my-bar'); 
    elem.css('width', width + '%');
    var dir = $(this).index();
    if(!dir) dir = -1;
    var next = ($('.sliders > .slides > .active').index()+1)%3;
    $('.sliders > .slides > .active').removeClass('active');
    $('.sliders > .slides > .slide').eq(next).addClass('active');
});