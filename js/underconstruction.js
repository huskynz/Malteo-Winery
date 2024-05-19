$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var page = params.get('page') || 'This page';
    $('#message').text(`Sorry, ${page} is under construction`);
});

$(document).ready(function() {
    var params = new URLSearchParams(window.location.search);
    var home = params.get('buttonclick') || 'Click the "Home" button in the nav to return to the home page';
    if (home == 'true') {
        $('#gohomemessage').text(`Click the Home button in the nav to return to the home page`);
    }
    else { $('#gohomemessage').text('Please enter a vaild ?buttonclick message it should be true anything else and it will result in this message'); }
});


