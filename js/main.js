$(function(){
    $('.nav__btn').on('click', function(){
        $('.nav__menu').toggleClass('nav__menu-active');
    })

    $('.header__slider').slick(
        {
            arrows: false,
            dots: true,
        }
    )

    $('.courses__slider').slick(
        {
            arrows: false,
            dots: true,
        }
    )

    $('.client__slider').slick(
        {
            arrows: false,
            dots: true,
        }
    )

});