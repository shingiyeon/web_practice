$('.image_slides > .buttons > .button').click(function() {
    var idx = $(this).index();
    $('.image_slides > .buttons > .button.active').removeClass('active');
    $(this).addClass('active');
    $('.image_slides > .slides > .slide.active').removeClass('active');
    $('.image_slides > .slides > .slide').eq(idx).addClass('active');
});

$('.image_slides > .side-buttons > *').click(function() {
    var idx = $(this).index();
    if(!idx) idx = -1;
    var current_slide_idx = $('.image_slides > .slides > .slide.active').index();
    
    var calculate_idx = (current_slide_idx + idx) % 5;
    $('.image_slides > .slides > .slide.active').removeClass('active');
    $('.image_slides > .buttons > .button.active').removeClass('active');
    
    $('.image_slides > .slides > .slide').eq(calculate_idx).addClass('active');
    $('.image_slides > .buttons > .button').eq(calculate_idx).addClass('active');  
})