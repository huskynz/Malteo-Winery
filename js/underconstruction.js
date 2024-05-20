$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var page = params.get('page') || 'This page';
    $('#message').text(`Sorry, ${page} is under construction`);
});

$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var backButton = params.get('backbutton') || 'Home';
    var buttonLink = `${backButton}`;

    // Create a new anchor element, set its href attribute and text, add the 'form-submit' class, and add it to the #button-back element
    $('#button-back').append($('<a>').attr('href', buttonLink).addClass('back-button').text('Go Back'));
});