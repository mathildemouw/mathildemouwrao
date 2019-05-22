window.onload = function () {
	listener = new PortfolioSectionsListener();
};

function PortfolioSectionsListener () {
//  songwriting code opera moreart bio
	$( "#songwriting-js" ).click(function() {
		$( ".portfolio-section" ).hide();
		$( ".songwriting" ).show();
	})

	$( "#code-js" ).click(function() {
		$( ".portfolio-section" ).hide();
		$( ".code" ).show();
	})

	$( "#opera-js" ).click(function() {
		$( ".portfolio-section" ).hide();
		$( ".opera" ).show();
	})

	$( "#moreart-js" ).click(function() {
		$( ".portfolio-section" ).hide();
		$( ".moreart" ).show();
	})

	$( "#bio-js" ).click(function() {
		$( ".portfolio-section" ).hide();
		$( ".bio" ).show();
	})
};