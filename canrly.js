/**
 * This is a library that tries to simplify the repetition in development using 
 * the Canvas API. Trying to make coding for Canvas more DRY in a sense.
 * 
 * Think of it like jQuery for Canvas
 *
 * version 0.0.1
 * 
 * REF: http://simon.html5.org/dump/html5-canvas-cheat-sheet.html
 */
 
(function(window) {
	
	/**
	 * Outline of overall goal for what this should essentially do
	 * 
	 * A Canvas object that allows you to create new canvas elements and a context for each one, and 
	 * has the initial set of properties and values which are needed by every canvas instance.
	 * 
	 * Create an object hierarchy of prototype instances of the Canvas object which provide easy to 
	 * use methods much like jQuery. The prototype chain should be abstracted in a way that lower level
	 * objects require properties of instances higher up.
	 * 
	 * For example: draw() should inherit all properties from Paths > Canvas because it 
	 * needs to know what should be drawn.
	 *
	 * The interface of prototypes should be abstracted out so the method are flexible enough to
	 * be able to take for example, sets of arrays for point coordinates. 
	 * Methods should be able to take callback functions so actions can be performed explicitly
	 * at the time a particular property is set. // That makes no sense does it?
	 * 
	 * Pseudo-example: 
	 * Canvas.lineTo( pointsArray, function() { // do something here as lineTo() done });
	 * 
	 * Coordinates for points should be broken down in a way that is clear what sets of points should be for.
	 * 
	 *
	 * I feel like I'm not making any sense, not really completely sure what I'm thinking about what needs
	 * to be done let alone how to explain the way to do it. Basically the goal is to provide an interface for
	 * working with canvas where you don't repeat things like, lineTo(2,5,20,10); and moveTo() and other things
	 */
 
	
	Object.prototyp.clone = function( obj ) {
		function Construct(){}
		Construct.prototype =  obj ;
		return new Construct();
	}
	
	Object.prototype.inherit = function( obj ) {
		this.prototype = clone( obj.prototype);
		this.prototype.constructor = this;
	};
	
	Object.prototype.method = function( name, callback ) {
		this.prototype[ name ] = callback;
	};
	
	Object.prototype.create = function() {
		var object = clone( this );
		if( typeof object.construct == "function" )
			object.construct.apply( object, arguments );
		return object;
	};
	
	Object.prototype.extend = function( props ) {
		var result = clone( this );
		forEach( props, function( name, value ) {
			result[ name ] = value;
		});
		return result;
	};

	Object.prototype.store = function(name, value) {
		this.values[name] = value;
	};

	Object.prototype.lookup = function(name) {
		return this.values[name];
	};
	
	Object.prototype.contains = function(name) {
		return Object.prototype.hasOwnProperty.call(this.values, name) &&
			 Object.prototype.propertyIsEnumerable.call(this.values, name);
	};

	/**
	 * For referencing object prototypes:
	 * inheritance - http://goo.gl/K3G3
	 * prototype   - http://goo.gl/IIP0a
	 * cheatsheet  - http://goo.gl/V8ZD
	 */

	/**
	 * Native properties and methods - 
	 * .prototype .isPrototypeOf .instanceof .hasOwnProperty .
	 * .concat .join .splice .map .filter .forEach .call .apply .substr 
	 * .slice .split .push .pop .length .toString .indexOf 
	 * Math.PI .abs .sin .cos .tan .acos .asin .atan .atan2 .sqrt
	 * .exp .log .ceil .floor .min .max .pow .random .round 
	 */

	/** 
	 * @Constructor object
	 * Create canvas elements with height, width, ID, context
	 */

	width
	height
	toDataURL([Optional] string type, [Variadic] any args)
	
	getContext("2d");
	save()
	restore() 


	
	/**
	 * Paths
	 */
	 
	 // Methods
 	beginPath()
	closePath()
	fill()
	stroke()
	clip()
	moveTo(x, y)
	lineTo(x, y)
	quadraticCurveTo(cpx, cpy, x, y)
	bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
	arcTo(x1, y1, x2, y2, radius)
	arc(x, y, radius, startAngle, endAngle, boolean anticlockwise)
	rect(x, y, w, h)
	isPointInPath(x, y) 
	
	
	
	
	/**
	 * Colors styles and shadows
	 */
	
	// Attributes
	strokeStyle
	fillStyle
	shadowOffsetX
	shadowOffsetY
	shadowBlur
	shadowColor
	
	// Methods
	createLinearGradient(x0, y0, x1, y1)
	createRadialGradient(x0, y0, r0, x1, y1, r1)
	addColorStop(offset, string color)
	createPattern(Object image, string repetition)
	
	/**
	 * Line styles
	 */
	 
	// Attributes
	lineWidth
	lineCap
	lineJoin
	miterLimit	
	
	
	/**
	 * Text methods
	 */
	 
	 // Attributes
	font // 10px sans-serif
	textAlign start // Supports any of the following values: start, end, left, right, center
	textBaseline
	

	// Methods
	fillText(string text, x, y, [Optional] maxWidth)
	strokeText(string text, x, y, [Optional] maxWidth)
	measureText(string text)
	
	/**
	 * Rectangles and shapes
	 */
	 
	// Methods
	clearRect(x, y, w, h)
	fillRect(x, y, w, h)
	strokeRect(x, y, w, h) 
	
	
	/**
	 * Transformations
	 */
	
	// Methods
	scale(x, y)
	rotate(angle)
	translate(x, y)
	transform(m11, m12, m21, m22, dx, dy)
	setTransform(m11, m12, m21, m22, dx, dy) 
	
	
	
	/**
	 * Pixel manipulation
	 */
	 
	 // Methods
	createImageData(sw, sh)
	getImageData( sx, sy, sw, sh)
	putImageData( imagedata, dx, dy, [Optional] dirtyX, dirtyY, dirtyWidth, dirtyHeight) 
	
	
	
	
	/**
	 * Compositing
	 */
	
	


	/**
	 * Drawing images
	 */
	 
	 // Methods
	drawImage(Object image, dx, dy, [Optional] dw, dh)
	// Argument image can be of type HTMLImageElement, HTMLCanvasElement or HTMLVideoElement.
	drawImage(Object image, sx, sy, sw, sh, dx, dy, dw, dh) 	
	
	
	
})(window);