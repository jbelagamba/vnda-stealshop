$(document).ready(function(){

    /*Instancia Menu*/
    $('nav#menu').mmenu({
       "slidingSubmenus": false
    });


    /*Instancia Slick para diferentes tamanhos de tela*/
    $('.slider-products').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
});

/*Efeito mouseover no destaque*/
$(".img-destaque").mouseover(function(){
    $(this).removeClass("zoomOutSteal");
    $(this).removeClass("animated");
    $(this).addClass("zoomInSteal");
    $(this).addClass("animated");
});

$(".img-destaque").mouseleave(function(){
    $(this).removeClass("zoomInSteal");
    $(this).removeClass("animated");
    $(this).addClass("zoomOutSteal");
    $(this).addClass("animated");
});

/* Efeito da section News*/
$(".image-product").mouseover(function(){
    msk  = $(this).find('.msk');
    msk.fadeIn();
    back  = $(this).find('.back');
    back.fadeIn();
});

$(".image-product").mouseleave(function(){
    msk  = $(this).find('.msk');
    msk.fadeOut();
    back  = $(this).find('.back');
    back.fadeOut();
});

