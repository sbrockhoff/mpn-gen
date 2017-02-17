/*global $, jQuery */
$(function ($) {
    'use strict';
    $.fn.MpnGen = function (options) {

        //Default all to No
        var ans = $.extend({
            usePrimary: 'No',
            useMarketing: 'No',
            useScience: 'No',
            useCompanyOps: 'No',
            useImprovements: 'No',
            useOther: 'No',
            useOtherText: '',
            sharePrimary: 'No',
            shareScience: 'No',
            shareCompanyOps: 'No',
            shareImprovements: 'No',
            shareOther: 'No',
            shareOtherText: '',
            shareNone: 'No',
            shareDeidentifiedPrimary: 'No',
            shareDeidentifiedScience: 'No',
            shareDeidentifiedCompanyOps: 'No',
            shareDeidentifiedImprovements: 'No',
            shareDeidentifiedOther: 'No',
            shareDeidentifiedOtherText: '',
            shareDeidentifiedNone: 'No',
            sellData: 'No',
            sellDeidentifiedData: 'No'
        }, options);

        this.append('<table>');
        this.append('<tr><th>We collect and use your identifiable data...</th><th></th></tr>');
        this.append('<tr><td>To provide the primary service of the app or technology</td><td>' + ans.usePrimary + '</td></tr>');
        this.append('<tr><td>To develop marketing materials for our products</td><td>' + ans.useMarketing + '</td></tr>');
        this.append('<tr><td>To conduct scientific research</td><td>' + ans.useScience + '</td></tr>');
        this.append('<tr><td>For company operations</td><td>' + ans.useCompanyOps + '</td></tr>');
        this.append('<tr><td>To develop and improve new and current products and services</td><td>' + ans.useImprovements + '</td></tr>');
        this.append('</table>');

        return this;
    };
})(jQuery);
