// $("body").niceScroll();
$(document).ready(function (){


    $(window).on("resize",function (){
        $(".slider").height($(window).height()).width($(window).width());

        $(".slider .center").css({
            top: (($(".slider").height() - $(".slider .center").height())/2),
            left: (($(".slider").width() - $(".slider .center").width())/2),
        });

        $(".menu").height($(".slider").height()).width($(".slider").width());


    });





    ////////////////////////////////////////////////////////

    $(".slider").height($(window).height()).width($(window).width());

    $(".slider button").on("click",function (){
        $(this).addClass("special").siblings().removeClass("special");
    });

    $(".slider .center").css({
        top: (($(".slider").height() - $(".slider .center").height())/2),
        left: (($(".slider").width() - $(".slider .center").width())/2),
    });

    $(".menu").height($(".slider").height()).width($(".slider").width());


    $(".menu li").on("click",function (){
       $(this).addClass("selected").siblings().removeClass("selected");
    });

    $(".nav .men").on("click",function (){
       $(".menu").slideToggle(1000);
    });
});



