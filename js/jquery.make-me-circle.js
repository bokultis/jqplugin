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

            $(this).fadeTo("slow",0.5);

            $(this).css("-moz-border-radius", settings.diameter/2);
            $(this).css("border-radius", settings.diameter/2);

            $(this).draggable();

			if ( $.isFunction( settings.complete ) ) {
				settings.complete.call( this );
		    }
		});

    }

}(jQuery));