$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var page = params.get('page') || 'This page';
    $('#message').text(`Sorry, ${page} is under construction`);
});