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
        });
    })(Layout = TP.Layout || (TP.Layout = {}));
})(TP || (TP = {}));
