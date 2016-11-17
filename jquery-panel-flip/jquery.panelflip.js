/*
 * jquery-panelflip.js
 *
 * Copyright (c) 2016 Studio Nuages
 * Licensed under MIT Lisence:
 * http://www.opensource.org/licenses/mit-license.php
 * http://sourceforge.jp/projects/opensource/wiki/licenses%2FMIT_license
 *
 * version: 1.0.0
 */

(function($) {
    $.fn.panelflip = function(params){
        var defaultParams = {
            transition: '1s',
            perspective: '1000px'
        };
        var config = $.extend({}, defaultParams, params);

        return this.each(function(){
            $(this).addClass('panelflip-container');
            $(this).css('perspective', config.perspective);
            $(this).children('.inner').css('transition', config.transition);

            $(this).on('click', function(){
                $(this).toggleClass('active');
            });
        });
    };
})(jQuery);
