$('.tab-box-1 > .head > ul > li').click(function(){
    var $parents = $(this).parents('.tab-box-1');
    $parents.find('ul > li.active').removeClass('active');
    
    var c = $(this).attr('class');
    $(this).addClass("active");
    $parents.find('ul > li.'+c).addClass("active");
})