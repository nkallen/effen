(function($) {
	$.fn.fn = function() {
	  var self = this;
	  var extension = name = arguments[0];
	  if ( typeof name == "string") {
		  if ($.isFunction(arguments[1])) {
		    var procedure = arguments[1];
		    self.data('fn.' + name, procedure);
		    return self;
			} else {
				var fn = self.data('fn.' + name);
				if (fn) {
				  var args = Array.prototype.slice.call(arguments, 1, arguments.length);
		    	return fn.apply(self, args);
				} else
				  throw(name + " is not defined");
		  }
		} else {
			$.each(extension, function(key, value) {
				self.fn(key, value);
			});
		}
	}
})(jQuery);