/*
 * name: LinkIt
 *author: Anna Teglassy - from Brad Traversy
 *version: 0.1.0
 *license: MIT
 */

/*this is a plugin, that's why it is strange structured!*/
 (function($) {
 	$.fn.linkIt = function(options) {
 		//Default Settings
 		var settings = $.extend({
 			href		:null,
 			text		:null,
 			target		:'_self'
 		}, options);
 		
 		//Validation
 		if(settings.href == null) {
 			console.log('You need an href option for LinkIt to work');
 			return this;
 		}

 		return this.each(function() {
 			var object = $(this);

 			if(settings.text == null) {
 				settings.text = object.text();
 			}

 			object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
 		});

 		


 		//alert(this.html());
 		}
}(jQuery));
 