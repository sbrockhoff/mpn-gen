/*global $ */
$(function () {
    'use strict';
    $("#mpnForm").on('submit', function (e) {
        event.preventDefault();
        
        /*Filter out empty input fields from form and serialize*/
        var selections = $('#mpnForm input').filter(function () {
            return $(this).val();
        }).serialize(),
            sel = selections.split('&');
         
        /*Build JQuery function that will be output to developer*/
        $('#result').html('')
            .append('<br />')
            .append('$(document).ready(function() {<br />')
            .append('&nbsp;&nbsp;$( \'#result\' ).MpnGen({<br />');
         
        /*Loop through each selection and add it to the generated JQuery function*/
        $.each(sel, function (index, param) {
            var name = param.substr(0, param.indexOf('=')),
                val = param.substr(param.indexOf('=') + 1, param.length);
            
            $('#result').append('&nbsp;&nbsp;&nbsp;&nbsp;' + name + ': \'' + val);
            if (index === (sel.length - 1)) {
                $('#result').append('\'<br />');
            } else {
                $('#result').append('\',<br />');   /*Add comma to all but the last parameter*/
            }
        });
        
        $('#result').append('&nbsp;&nbsp;});<br/>');
        $('#result').append('});<br/>');
    });
});

