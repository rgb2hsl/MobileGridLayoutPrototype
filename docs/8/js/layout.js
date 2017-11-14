/// <reference path="/../assets/typescript/jquery.d.ts" />
var TP;
(function (TP) {
    var Layout;
    (function (Layout) {
        var $grid;
        $(function () {
            $grid = $('[data-grid]');
            $(document).on('click', '[data-grid-state-set]', function (e) {
                var $clickedControl = $(e.currentTarget), newState = $clickedControl.data('grid-state-set');
                $grid.attr('data-state', newState);
                e.preventDefault();
            });
            $(document).on('click', '[data-nav-show]', function (e) {
                var $clickedControl = $(e.currentTarget), activeClass = $clickedControl.data('active-class'), navName = $clickedControl.data('nav-show'), $navElement = $("[data-nav=" + navName + "]");
                $('[data-nav-show]').not($clickedControl).each(function (i, e) {
                    $(e).removeClass($(e).data('active-class'));
                });
                $('[data-nav]').each(function (i, e) {
                    $(e).addClass($(e).data('nav-hide-class'));
                });
                if ($clickedControl.hasClass(activeClass)) {
                    $navElement.addClass($navElement.data('nav-hide-class'));
                }
                else {
                    $navElement.removeClass($navElement.data('nav-hide-class'));
                }
                $clickedControl.toggleClass(activeClass);
            });
            $(document).on('click', '[data-dashboard-nav-show=main]', function (e) {
                $('[data-dashboard-nav=main]').toggleClass('tpl-dashboard-nav_hide');
                $('[data-dashboard-content=main]').toggle();
                e.preventDefault();
            });
        });
    })(Layout = TP.Layout || (TP.Layout = {}));
})(TP || (TP = {}));
