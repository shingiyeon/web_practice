$('.menu-1 > .box').mouseenter(function(){
    $('.list-box-1 .active').removeClass('active');
    $('.menu-1 > .box').removeClass('active');
    var idx = $(this).index();
    $('.list-box-1 > ul.ulblock > li.liblock').eq(idx).addClass('active');
    $(this).addClass('active');
})
