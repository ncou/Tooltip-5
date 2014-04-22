(function($) {
    var defaults = {
        tipClass: '',
        position: {
            top: 10,
            left: 0
        },
        html: '',
        opacity: 0.7,
        fading: 300
    };

    $.fn.tooltip = function(options) {
        var settings = $.extend({}, defaults, options);

        return this.each(function() {
            var _this = $(this);
            var offset = _this.offset();
            var $tip = $('<div/>', {
                'class', settings.tipClass
            }).appendTo('body').hide().html(settings.html);

            var x = offset.left + settings.position.left;
            var y = offset.top - settings.position.top - $tip.outerHeight(true);

            // Adjust x, y axis;
            x = x < 0 ? 0 : x;
            y = y < 0 ? 0 : y;

            $tip.css({
                position: 'absolute',
                top: y,
                left: x,
                opacity: settings.opacity
            }).fadeIn(settings.fading);
        });
    }
})(jQuery);
