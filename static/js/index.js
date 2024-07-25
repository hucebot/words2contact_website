window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
<<<<<<< HEAD
			autoplaySpeed: 5000,
=======
			autoplaySpeed: 10000,
>>>>>>> 05f511345ad0e4cd89253ca255f88e479ef25909
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
<<<<<<< HEAD
	
=======

>>>>>>> 05f511345ad0e4cd89253ca255f88e479ef25909
    bulmaSlider.attach();

})
