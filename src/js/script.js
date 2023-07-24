jQuery(document).ready(function ($) {
    $('.has-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.has-carousel-02').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});