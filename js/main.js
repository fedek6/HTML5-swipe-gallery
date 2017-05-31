// Pevent viewport drag
$(window).bind(
  'touchmove',
   function(e) {
    e.preventDefault();
  }
);

$(function() {
  // Handler for .ready() called.
  console.log( 'hello world' );
  
	/**
	 * Pinch zoom init
	 */
	var $slides = $('.swipe-wrap > div').each(function () {
		var $this = $(this);
		
		$this.data( 'PinchZoom', new RTP.PinchZoom( this, {
			maxZoom: 3,
			minZoom: 0.5,
		}) );
		
	});
	
	var $progressBar = $( '#progress > div');
	
	// @var integer how many slides do we have
	var count = $slides.length - 1;
	
	/**
	 * Swipe init
	 */
	var swipeObj = Swipe( $( '#slider' ).get(0), { 
			disableScroll: true,
			stopPropagation: true,
			callback: function(i, e) {
				
				/**
				 * Calculate precentage progress.
				 */
				var progress = Math.floor( (i / count) * 100 );
							
				$progressBar.css( 'width', progress + '%' );
			}
		});
		
		
	/**
	 * Controls
	 */
	
	$('a[aria-controls="slider"]').on( 'touchend click', function(e) {
					
		e.stopPropagation();
		e.preventDefault();
		
		var $this 		= $(this),
			action 		= $this.attr( 'data-action' ),
			i 			= swipeObj.getPos(),
			$o 			= $slides.eq(i);
		
		switch( action ) {
			case "next":
				// reset current & go to next slide
				$o.data( 'PinchZoom').zoomOutAnimation( function() { swipeObj.next(); } );
				break;
				
			case "prev":
				// reset current & go to next slide
				$o.data( 'PinchZoom').zoomOutAnimation( function() { swipeObj.prev(); } );
				break;
				
			case "zoom-reset":				
				$o.data( 'PinchZoom').zoomOutAnimation();
				break;
				
			case "zoom-in":
				$o.data( 'PinchZoom' ).zoomIn();
				break;
				
			case "zoom-out":
				$o.data( 'PinchZoom' ).zoomOut();
				break;			
			
		}
		
		console.log( 'INFO: Action btn clicked.' );
	});
});