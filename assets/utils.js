$(function() {

    function resizePlaceHolder() {

        var $viewPortParams = {
            width:      $(window).width(),
            height:     $(window).height(),
            margin:     {
                y:  parseInt($(window).height()/20)
            }
        };

        var element = $('#bianca-minnie-background');
        var overlay = $('#bianca-minnie-background #overlay')

        element.css('margin-top', $viewPortParams.margin.y);

        element.css('width', function(){
            return parseInt(($viewPortParams.width/20)*18);
        });

        element.css('height', function(){
            return parseInt(($viewPortParams.height/20)*18);
        });

        overlay.css('top', parseInt(element.height() - overlay.height()));
        overlay.css('left', parseInt(element.width() - overlay.width()));
    }

    resizePlaceHolder();

    $(window).resize(resizePlaceHolder);
});