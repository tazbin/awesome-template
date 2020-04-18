$(document).ready(function() {

    // owl-carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            }
        }
    });
    // owl-carousel

    // magnificPopup
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            // options for gallery
            enabled: true
        }
    });
    // magnificPopup

    // Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    $('.filter-button-group').on('click', 'button', function(e) {
        $('.filter-button-group button').removeClass('active');
        e.target.classList.add('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    // Isotope

    // topbar hide
    let topBarHeight = $('.top-bar').height();

    function hideTopBar() {
        $(window).scroll(function() {
            let topScroll = $(window).scrollTop();
            if (topScroll > topBarHeight) {
                $('.top-bar').addClass('.topbar-hide');
            }
        });
    }

    hideTopBar();
    // topbar hide

    // fixed navbar
    let nav_offset_top = $('.jumbotron').height();
    let navHeight = $('.navbar').height() + 50;

    function navFixed() {
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if (navHeight <= scroll) {
                $('.navbar').addClass('fixedTop');
                $('.navbar').addClass('navbar-dark bg-dark');
                $('.navbar').removeClass('navbar-light bg-light');
            } else {
                $('.navbar').removeClass('fixedTop');
                $('.navbar').removeClass('navbar-dark bg-dark');
                $('.navbar').addClass('navbar-light bg-light');
            }
        });
    }

    navFixed();
    // fixed navbar


});