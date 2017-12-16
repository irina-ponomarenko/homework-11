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