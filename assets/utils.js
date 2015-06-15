$(function() {

    function resizePlaceHolder() {

        var viewPortParams = {
            width:      $(window).width(),
            height:     $(window).height(),
            marginx:    parseInt(($(window).width()/20)),
            marginy:    parseInt(($(window).height()/20))
        };


        var element = $('#bianca-minnie-background');

        element.css('margin-top', viewPortParams.marginy);

        element.css('width', function(){
            return parseInt(($(window).width()/20)*18);
        });

        element.css('height', function(){
            return parseInt(($(window).height()/20)*18);
        });

        console.log (viewPortParams);
    }

    resizePlaceHolder();

    $(window).resize(resizePlaceHolder);
});