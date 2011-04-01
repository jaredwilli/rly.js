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
     
    /**
     * For referencing object prototypes:
     * inheritance - http://goo.gl/K3G3
     * prototype   - http://goo.gl/IIP0a
     */


    /** 
     * @Constructor object
	 * Create canvas elements with height, width, ID, context
	 */
	
    
	
	/**
	 * Path methods
	 */
	
    
    
	
	/**
	 * Colors styles and shadows
	 */
	
    
    
    
	/**
	 * Line styles
	 */
	
	
    
    
	/**
	 * Text
	 */    
	
    
    
    
	/**
	 * Rectangles
	 */
	 
	
    
    
	/**
	 * Transformations
	 */
	
	
    
    
	/**
	 * Pixel manipulation
	 */
	
	
    
    
	/**
	 * Compositing
	 */
	
	


	/**
	 * Drawing images
	 */
	
	
    
    
})(window);