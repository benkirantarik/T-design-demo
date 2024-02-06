
// ------------------------------------------------------------------------------------------------- Scroll Function

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar-nav a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        let current_active_a = document.querySelector('a.active');
        if (current_active_a) {
            current_active_a.classList.remove('active');
        }
        this.classList.add('active');
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});

$(function () {
    'use strict';
    // Adjust Slider Height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(winH - (upperH + navH));


    //Featured Work Shuffle
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity', 1);
        } else {
            $('.shuffle-imgs .col-md').css('opacity', .08);
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });

    $('.testimonials a').on('click', function () {
        $(this).addClass('activated').siblings().removeClass('activated');
    });


});
