$(document).ready(function() {
    $('#top_bar a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('current');
        }
    });
})
