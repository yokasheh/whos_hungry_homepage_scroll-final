jQuery(document).ready(function($){
	var signUpButton = $('.sign-up-button');
	var signUpInput = $(".signup-email-input");

	var post = function(email) {
		console.log(email);
	};

	var showThanksButton = function() {
		signUpInput.fadeOut();
		signUpButton.text("Thanks for signing up");
		signUpButton.unbind("click");
		signUpButton.css("cursor", "default");
	};

	signUpButton.on('click', function(event) {
		var text;

		if (signUpInput.is(":visible")) {
			text = signUpInput.val();
    		post(text.trim());
    		showThanksButton();
    		return;
		}

		event.preventDefault();
		/* Act on the event */
		// Transform button
		signUpButton.text("Get Notified");

		// Show and Bring focus to input field
		signUpInput
			.fadeIn()
			.focus()
			.putCursorAtEnd();

		// Enter key action
		signUpInput.keyup(function(e) {
    		if (e.keyCode == 13) {
    			// Post email
    			var text = signUpInput.val();
    			post(text.trim());
    			showThanksButton();
    		} else if (e.keyCode == 27) {
    			signUpInput.fadeOut();
    			signUpButton.text("Get Notified When We Launch").focus();
    		}

    	});
 	});


});


//credits http://css-tricks.com/snippets/jquery/move-cursor-to-end-of-textarea-or-input/
jQuery.fn.putCursorAtEnd = function() {
	return this.each(function() {
    	// If this function exists...
    	if (this.setSelectionRange) {
      		// ... then use it (Doesn't work in IE)
      		// Double the length because Opera is inconsistent about whether a carriage return is one character or two. Sigh.
      		var len = $(this).val().length * 2;
      		this.setSelectionRange(len, len);
    	} else {
    		// ... otherwise replace the contents with itself
    		// (Doesn't work in Google Chrome)
      		$(this).val($(this).val());
    	}
	});
};