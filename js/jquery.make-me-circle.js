(function($) {

    $.fn.makeMeCircle = function( options ) {

		// Establish our default settings
        var defaults = {
            diameter     : 300, //in pixels
            complete     : function(){}
        };

        var settings = $.extend( {}, defaults, options );

		return this.each(function() {
			$(this).css("width", settings.diameter);
            $(this).css("height", settings.diameter);
            $(this).draggable();

			if ( $.isFunction( settings.complete ) ) {
				settings.complete.call( this );
		    }
		});

    }

}(jQuery));