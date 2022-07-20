//ヘッダーを上から下に表示させる為

const headerMove = $("header");

$(window).on("load scroll", function() {

    if ($(this).scrollTop() > 200 && headerMove.hasClass("isFixed") == false) {
        headerMove.css("display", "block");
        headerMove.css({"top":"-80px"});
        headerMove.addClass("isiFxed");
        headerMove.animate({"top": 0}, 600);
    }

    else if ($(this).scrollTop() < 200 && headerMove.hasClass("isFixed") == true) {
        headerMove.removeClass("isFixed");
        headerMove.css("display", "none");
    }
});




//セクションを動かすため

function BgFadeAnime(){


    $('.bgTrigger').each(function(){
      var elemPos = $(this).offset().top-5;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgExtend');
      }else{
        $(this).removeClass('bgExtend');
      }
    });

    $('.textTrigger').each(function(){
      var elemPos = $(this).offset().top-5;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        $(this).addClass('bgAppear');
      }else{
        $(this).removeClass('bgAppear');
      }
    });
}




$(window).scroll(function(){
    BgFadeAnime();
});