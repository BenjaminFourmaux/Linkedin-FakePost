/** Main **/

function removeFrameSizeClass() {
	$('#frame').removeClass("p-16");
	$('#frame').removeClass("p-32");
	$('#frame').removeClass("p-48");
	$('#frame').removeClass("p-64");
	
	// Reset Side padding
	$('#result').css('padding', '25%');
}

function changeFrameSize(size) {
	$('#result').css('padding', 'calc(25% - ' + size + 'px');
	$('#frame').addClass("p-"+size);
}

function removeFrameColorClass(){
	$('#frame').removeClass("frame-bg-grey");
	$('#frame').removeClass("frame-bg-azure");
	$('#frame').removeClass("frame-bg-breeze");
	$('#frame').removeClass("frame-bg-sunset");
	$('#frame').removeClass("frame-bg-raindrop");
	$('#frame').removeClass("frame-bg-meadow");
}

function frameBgColor(selectedItemIndex) {
	switch(selectedItemIndex){
		case 2:
			return "frame-bg-grey";
		case 3:
			return "frame-bg-azure";
		case 4:
			return "frame-bg-breeze";
		case 5:
			return "frame-bg-sunset";
		case 6:
			return "frame-bg-raindrop";
		case 7:
			return "frame-bg-meadow";
		default:
			return "";
	}
}

function themeDark() {
	// Remove class
	$('body').removeClass('theme-marcado');
	$('#profile-picture').removeClass('bg-light');
	$('#profile-name').removeClass('bg-light');
	$('#profile-job').removeClass('bg-light');
	$('#content-text').removeClass('bg-light');
	$('#style-theme').removeClass('bg-light');
	$('#style-frame-color').removeClass('bg-light');
	$('#style-frame-size').removeClass('bg-light');
	
	// Add class
	$('body').addClass('theme-dark');
	$('#profile-picture').addClass('bg-dark text-light');
	$('#profile-name').addClass('bg-dark text-light');
	$('#profile-job').addClass('bg-dark text-light');
	$('#content-text').addClass('bg-dark text-light');
	$('#style-theme').addClass('bg-dark text-light');
	$('#style-frame-color').addClass('bg-dark text-light');
	$('#style-frame-size').addClass('bg-dark text-light');
}

function themeLight() {
	// Remove class
	$('body').removeClass('theme-dark');
	$('#profile-picture').removeClass('bg-dark text-light');
	$('#profile-name').removeClass('bg-dark text-light');
	$('#profile-job').removeClass('bg-dark text-light');
	$('#content-text').removeClass('bg-dark text-light');
	$('#style-theme').removeClass('bg-dark text-light');
	$('#style-frame-color').removeClass('bg-dark text-light');
	$('#style-frame-size').removeClass('bg-dark text-light');
	
	// Add class
	$('body').addClass('theme-marcado');
	$('#profile-picture').addClass('bg-light');
	$('#profile-name').addClass('bg-light');
	$('#profile-job').addClass('bg-light');
	$('#content-text').addClass('bg-light');
	$('#style-theme').addClass('bg-light');
	$('#style-frame-color').addClass('bg-light');
	$('#style-frame-size').addClass('bg-light');
}

// Erase the post
function erasePost() {
	$('#result-profile-name').empty();
	$('#result-profile-job').empty();
}

/* ---- Events ---- */
// Profile Picture
$('#profile-picture').change(() => {
	$('#result-profile-picture').removeAttr('src');
	$('#result-profile-picture').attr('src',$('#profile-picture').val());
});

// Profile name
$('#profile-name').change(() => {
	$('#result-profile-name').empty();
	$('#result-profile-name').append($('#profile-name').val());
});

// Profile job
$('#profile-job').change(() => {
	$('#result-profile-job').empty();
	$('#result-profile-job').append($('#profile-job').val());
});

// Content text
$('#content-text').change(() => {
	$('#result-content-text').empty();
	$('#result-content-text').append($('#content-text').val());
});

// Style theme
$('#style-theme').change(() => {
	if($('#style-theme').is(':checked')){
		// Theme dark
		themeDark();
	} else {
		// Theme light
		themeLight();
	}
});

// Style frame color
$('#style-frame-color').change(() => {
	var selectedIndex = parseInt($('#style-frame-color option:selected').val());
	// If non selected disable size range input
	if(selectedIndex == 1) {
		$('#style-frame-size').prop('disabled', true);
		removeFrameSizeClass();
		removeFrameColorClass();
	} else {
		$('#style-frame-size').prop('disabled', false);
		
		// Applied current selected style
		removeFrameSizeClass();
		changeFrameSize($('#style-frame-size').val());
		
		// Frame change color
		removeFrameColorClass();
		$('#frame').addClass(frameBgColor(selectedIndex));
	}
});

// Style frame size
$('#style-frame-size').change(() => {
	// Remove size class before add new size
	removeFrameSizeClass();
	
	changeFrameSize($('#style-frame-size').val());
});
