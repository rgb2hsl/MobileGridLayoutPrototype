/// <reference path="/../assets/typescript/jquery.d.ts" />

module TP.layout {
    var $tpSupernav_show:JQuery,
        $tpSupernav_hide:JQuery,
        $tpBody:JQuery,
        $tpSupernav:JQuery;

    $(()=>{
        $tpSupernav_show =  $('[data-tp-supernav-action=show]');
        $tpSupernav_hide =  $('[data-tp-supernav-action=hide]');
        $tpBody =           $('[data-tp-body]');
        $tpSupernav =       $('[data-tp-supernav]');

        $tpSupernav_show.click((e)=>{
            $tpBody.addClass('tp-body_hidden');
            $tpSupernav.removeClass('tp-supernav_hidden');
            e.preventDefault();
        });
        $tpSupernav_hide.click((e)=>{
            $tpBody.removeClass('tp-body_hidden');
            $tpSupernav.addClass('tp-supernav_hidden');
            e.preventDefault();
        });
    })
}