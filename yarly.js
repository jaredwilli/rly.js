(function(window) {
    var middle = [],
		
		toString = Object.prototype.toString,
		hasOwn = Object.prototype.hasOwnProperty,
		push = Array.prototype.push,
		slice = Array.prototype.slice,
		indexOf = Array.prototype.indexOf,
		trim = String.prototype.trim;
    
    var yarly = function() {
        if( arguments.length > 0 ) {
            var result = 0;
            for( var i = 0; i < middle.length; i++ ) {
                result = middle[i].apply(yarly, arguments);
				if( result ) return result;
            }
        }
    },
    
	yarly.version = '0.0.1',
	yarly.alias = window.y || 'y',
	window[yarly.alias] = yarly;
	
	/**
	 * 
	 **/
	 yarly.isArray = Array.isArray || function( object ) {
		 return !!( object && object.concat 
				 && object.unshift && !object.callee );
	 };
	 
	 /**
	  * 
	  **/
	yarly.toArray = function( collection ) {
		var results = [];
		for( var i = 0; i < collection.length; i++ ) {
			results.push( collection[i] );
		}
		return results;
	};
	
	//
	yarly.init = function( fn ) {
		middle.unshift( fn );
	};
	
	/**
	 * 
	 **/
	 yarly.isNumber = function( object ) {
		 return ( object === +object ) || ( toString.call( object ) === '[object Number]');
	 };
	 
	 /**
	  * 
	  **/
	  yarly.bind = function( fn, object ) {
		  var args = slice.apply( arguments, [2] );
		  return function() {
			  return fn.apply( object || {}, args.concat( slice.apply(arguments) ));
		  };
	  };
	
		
	/**
	 * 
	 **/  
    
    
    
    
    })(yarly);
    

})(window);