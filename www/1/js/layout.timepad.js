/// <reference path="/../assets/typescript/jquery.d.ts" />
var TP;
(function (TP) {
    var layout;
    (function (layout) {
        var $tpSupernav_show, $tpSupernav_hide, $tpBody, $tpSupernav;
        $(function () {
            $tpSupernav_show = $('[data-tp-supernav-action=show]');
            $tpSupernav_hide = $('[data-tp-supernav-action=hide]');
            $tpBody = $('[data-tp-body]');
            $tpSupernav = $('[data-tp-supernav]');
            $tpSupernav_show.click(function (e) {
                $tpBody.addClass('tp-body_hidden');
                $tpSupernav.removeClass('tp-supernav_hidden');
                e.preventDefault();
            });
            $tpSupernav_hide.click(function (e) {
                $tpBody.removeClass('tp-body_hidden');
                $tpSupernav.addClass('tp-supernav_hidden');
                e.preventDefault();
            });
        });
    })(layout = TP.layout || (TP.layout = {}));
})(TP || (TP = {}));
