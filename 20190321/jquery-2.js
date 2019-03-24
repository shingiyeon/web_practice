var 팝업열기 = function(){
    $('.popup-bg').addClass('active');
}

var 팝업닫기 = function(){
    $('.popup-bg').removeClass('active');
}

$('.button').click(팝업열기);
$('.popup > .btn-close').click(팝업닫기);
