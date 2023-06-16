$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            } else {
                $(this).removeClass('on')
            }
        })
    })
    /* const mainSlide=$('main_slide').slick();*/

    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        speed: 3000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',

        /*navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.dd_left',
        },
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        }, */

    });

    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });
    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });

    $('.main_visual .slide_dots li').on('click', function () {
        let idx = $(this).index();
        mainSlide.slideTo(idx);
        $(this).addClass('on').siblings().removeClass('on');

    })

    const noticeslide = new Swiper('.notice_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
    $('.main_notice .arrows .left').on('click', function () {
        noticeslide.slidePrev();
    });
    $('.main_notice .arrows .right').on('click', function () {
        noticeslide.slideNext();
    });
})