(function($) {

    $.fn.insertText = function( customText, options ) {

		// Establish our default settings
        var defaults = {
            text         : 'Hello, World!',
            color        : null,
            fontStyle    : null,
            complete     : function(){alert('Done')}
        };

        var settings = $.extend( {}, defaults, options );

		return this.each(function() {
			$(this).text( customText );

			if ( $.isFunction( settings.complete ) ) {
				settings.complete.call( this );
		    }
		});



    }

}(jQuery));