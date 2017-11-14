/// <reference path="/../assets/typescript/jquery.d.ts" />

module TP.Layout {
    var $grid:JQuery;

     $(()=>{
         $grid = $('[data-grid]');

         $(document).on('click', '[data-grid-state-set]', (e:Event)=>{
             var $clickedControl = $(e.currentTarget),
                 newState = $clickedControl.data('grid-state-set');

             $grid.attr('data-state', newState);

             e.preventDefault();
         });

         $(document).on('click', '[data-nav-show]', (e:Event)=> {
             var $clickedControl = $(e.currentTarget),
                 activeClass = $clickedControl.data('active-class'),
                 navName = $clickedControl.data('nav-show'),
                 $navElement = $(`[data-nav=${navName}]`);

                $('[data-nav-show]').not($clickedControl).each((i,e)=>{
                    $(e).removeClass($(e).data('active-class'));
                });
                $('[data-nav]').each((i,e)=>{
                    $(e).addClass($(e).data('nav-hide-class'));
                });

                if ($clickedControl.hasClass(activeClass)) {
                    $navElement.addClass($navElement.data('nav-hide-class'));
                } else {
                    $navElement.removeClass($navElement.data('nav-hide-class'));
                }

                $clickedControl.toggleClass(activeClass);
         });
     });
}
