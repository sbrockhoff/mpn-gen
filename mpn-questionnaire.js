/*global $ */
$(function () {
    'use strict';
    $("#mpnForm").on('submit', function (e) {
        event.preventDefault();
        
        var selections = $(this).serialize();
         
        $('#result').html('')
            .append('<br />')
            .append('$(document).ready(function() {<br/>')
            .append('&nbsp;&nbsp;$( \'#result\' ).MpnGen({<br/>');
         
        $.each(selections.split('&'), function (index, param) {
            //Only output if there is something after the equals
            if (param.split('=')[1] !== '') {
                var name = param.substr(0, param.indexOf('=')),
                    val = param.substr(param.indexOf('=') + 1, param.length);
            
                $('#result').append('&nbsp;&nbsp;&nbsp;&nbsp;' + name + ': \'' + val + '\'<br/>');
            }
        });
        
        $('#result').append('&nbsp;&nbsp;});<br/>');
        $('#result').append('});<br/>');
    });
});

