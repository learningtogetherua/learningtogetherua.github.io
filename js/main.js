$(function(){

    $('.nav__btn').on('click', function(){
        $('.nav__menu').toggleClass('nav__menu-active');
    })

    $('.header__slider').slick(
        {
            arrows: false,
            dots: true,
            // autoplay: true,
            // fade: true,
           
        }
    )

    $('.courses__slider').slick(
        {
            arrows: false,
            dots: true,
            // autoplay: true,
            // fade: true,
           
        }
    )

    $('.teachers__slider').slick(
        {
            arrows: false,
            dots: true,
            // autoplay: true,
            // fade: true,
           
        }
    )
    $('.client__slider').slick(
        {
            arrows: false,
            dots: true,
            // autoplay: true,
            // fade: true,
           
        }
    )

    // $('.reviews__slider').slick({
    //     arrows: false,
    //     dots: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 2,
    //     responsive: [
    //         {
    //             breakpoint: 1140,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3
    //             }
    //         },
    //         {
    //             breakpoint: 840,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2

    //             }
    //         },
    //         {
    //             breakpoint: 580,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // })
});