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
     });
}
