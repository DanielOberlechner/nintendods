$(document).ready(function() {
    document.getElementById('link2').addEventListener('click', function() {
        $(window).scrollTo($('#main'), 500);
    })
    document.getElementById('link3').addEventListener('click', function() {
        $(window).scrollTo($('#functions'), 1000);
    })
    document.getElementById('link4').addEventListener('click', function() {
        $(window).scrollTo($('#contact'), 1500);
    })
})