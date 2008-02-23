(function($) {
	$.fn.fn = function() {
	  var self = this;
	  var extension = name = arguments[0];
	  if (typeof name == "string") {
		  return apply(self, name, $.makeArray(arguments).slice(1, arguments.length));
		} else {
			$.each(extension, function(key, value) {
				define(self, key, value);
			});
			return self;
		}
	}
	function define(self, name, fn) {
    self.data(namespacedName(name), fn);
  };
  function apply(self, name, arguments) {
    var fn = self.data(namespacedName(name));
		if (fn)
    	return fn.apply(self, arguments);
		else
		  throw(name + " is not defined");
  };
  function namespacedName(name) {
    return 'fn.' + name;
  }
})(jQuery);