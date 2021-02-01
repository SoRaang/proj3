// ---------- CWK Individual jQuary Ver. 2020101 ----------

$(document).ready(function() { // jQuery Load
    $('aside#popSplash').fadeIn().css({'display': 'flex'});

    if ($(window).scrollTop() > $('#secBestSeller').offset().top) {
        $('body').css({'background': '#fff'});
        $('h2.secTitle').removeClass('inverted');
        $('dl.single_desc').removeClass('inverted');
    } else {
        $('body').css({'background': '#2d2d2d'});
        $('h2.secTitle').addClass('inverted');
        $('dl.single_desc').addClass('inverted');
    }

    $('button#splashClose').click(function() {
        $('aside#popSplash').fadeOut();
    });

    $('article.mainslide-item').each(function() {
        var img_src = $(this).find('img.mainslide-img').attr('src');

        $(this).css({"background-image": "url('" + img_src + "')", "background-repeat": "no-repeat", "background-position": "center 15%"});
    });

    $('.slide-main').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        arrows: false,
        dots: true,
        zIndex: 1,
    });

    $('.slide-list').slick({
        autoplay: false,
        infinite: false,
        arrows: true,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        zIndex: 1,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }]
    });

    $('article.item_single').hover(function() {
        $('.slick-arrow').css({'z-index': '-1'});
    }, function() {
        $('.slick-arrow').css({'z-index': '1'});
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > $('#secBestSeller').offset().top) {
            $('body').css({'background': '#fff'});
            $('h2.secTitle').removeClass('inverted');
            $('dl.single_desc').removeClass('inverted');
        } else {
            $('body').css({'background': '#2d2d2d'});
            $('h2.secTitle').addClass('inverted');
            $('dl.single_desc').addClass('inverted');
        }
    });
}) // jQuery Closed