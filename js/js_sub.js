// ---------- CWK Individual jQuary Ver. 2020101 ----------

$(document).ready(function() { // jQuery Load
    var img_src = $('img.cover_content').attr('src');

    $('div#subContentBG').css({"background-image": "url('" + img_src + "')", "background-repeat": "no-repeat", "background-position": "center 15%"});
}) // jQuery Closed