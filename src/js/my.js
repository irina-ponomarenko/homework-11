$(document).ready(function () {
    $("#mens").click(function() {
        $('.drop-down-menu').toggle();
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest("#mens").length) {
            $('.drop-down-menu').hide();
        }
        e.stopPropagation();
    });
});
$(document).ready(function () {
    $(".empty").hover(function(){
        $(this).css("background-color", "#00c8c8");
    }, function(){
        $(this).css("background-color", "transparent");
    });
});
$(document).ready(function () {
    $(".btn-slider").hover(function(){
        $(this).css("background-color", "#00c8c8");
        $(this).css("color", "white");
        $(this).css("border", "1px solid #00c8c8");
    }, function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#727272");
        $(this).css("border", "1px solid #727272");
    });
});
$(document).ready(function () {
    $(".nav-title li").hover(function(){
        $(this).css("background-color", "#00c8c8");
    }, function(){
        $(this).css("background-color", "#727272");
    });
});
$(document).ready(function () {
    $(".btn-primary").hover(function(){
        $(this).css("background-color", "#00c8c8");
        $(this).css("color", "white");
        $(this).css("border", "1px solid #00c8c8");
    }, function(){
        $(this).css("background-color", "transparent");
        $(this).css("color", "#727272");
        $(this).css("border", "1px solid #727272");
    });
});
$(document).ready(function () {
    $(".social-footer a").hover(function(){
        $(this).css("color", "#727272");
    }, function(){
        $(this).css("color", "white");
    });
});