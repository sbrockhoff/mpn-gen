$(function ($) {
    $.fn.MpnGen = function(options) {

        //Default all to false
        var ans = $.extend({
            usePrimary: 'No',
            useMarketing: 'No',
            useScience: 'No',
            useCompanyOps: 'No',
            useProductResearch: 'No',
            useOther: 'No',
            useOtherText: ''
        }, options);

        this.append('<table>');
        this.append('<tr><th>We collect and use your identifiable data...</th><th></th></tr>');
        this.append('<tr><td>To provide the primary service of the app or technology</td><td>' + ans.usePrimary + '</td></tr>');
        this.append('<tr><td>To develop marketing materials for our products</td><td>' + ans.useMarketing + '</td></tr>');
        this.append('<tr><td>To conduct scientific research</td><td>' + ans.useScience + '</td></tr>');
        this.append('<tr><td>For company operations</td><td>' + ans.useCompanyOps + '</td></tr>');
        this.append('<tr><td>To develop and improve new and current products and services</td><td>' + ans.useProductResearch + '</td></tr>');
        this.append('</table>');

        return this;
    }
}(jQuery));
