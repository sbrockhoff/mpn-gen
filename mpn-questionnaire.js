

$(function() {
     $("#mpnForm").on('submit', function(e) {
        event.preventDefault();
        console.log($(this).serialize());
     });
});

