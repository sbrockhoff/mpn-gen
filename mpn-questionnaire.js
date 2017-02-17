

$(function() {
     $("#mpnForm").on('submit', function(e) {
        event.preventDefault();
        
        var selections = $(this).serialize();
         
        $('#result').html('')
        .append($(this).serialize())
        .append('<br />')
        .append('$( document ).ready(function() {<br/>')
        .append('&nbsp;&nbsp;$( \'#result\' ).MpnGen({<br/>');
         
        $.each(selections.split('&'), function(index, param) {
            //Only output if ther eis something after the equals
            if(param.split('=')[1] != '') {
                 var paramXform = param.replace('=', ': ');
            
                $('#result').append('&nbsp;&nbsp;&nbsp;&nbsp;' + paramXform + '<br/>');
            }
        });
        
        $('#result').append('&nbsp;&nbsp;});<br/>')
        $('#result').append('});<br/>');
     });
});

