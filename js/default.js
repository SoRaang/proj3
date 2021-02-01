// ---------- CWK Default jQuary Ver. 202101 ----------

$(document).ready(function() { // jQuery Load
    if ($(this).scrollTop() > 50) {
        $('header#headBase.head_index').addClass('head_scrolled');
    } else {
        $('header#headBase.head_index').removeClass('head_scrolled');
    }

    if ($(this).scrollTop() > 200) {
        $('header#headBase.head_sub').addClass('head_scrolled');
    } else {
        $('header#headBase.head_sub').removeClass('head_scrolled');
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header#headBase.head_index').addClass('head_scrolled');
        } else {
            $('header#headBase.head_index').removeClass('head_scrolled');
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('header#headBase.head_sub').addClass('head_scrolled');
        } else {
            $('header#headBase.head_sub').removeClass('head_scrolled');
        }
    });

    $('nav#navMain > a').each(function() {
        $(this).click(function() {
            $(this).siblings('a').removeClass('nav_checked');
            $(this).addClass('nav_checked');
        });
    });

    $('button#btnProfile').click(function() {
        $('div#floatAcc').toggleClass('on');
    });
}) // jQuery Closed