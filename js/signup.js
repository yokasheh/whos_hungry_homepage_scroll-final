jQuery(document).ready(function($){
	var signUpButton = $('.sign-up-button');
    var signUpInput = $(".signup-email-input");

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
    $('.sign-up-button.actionable').click(function(){
        var text;
        text = signUpInput.val();
		post(text.trim());
		showThanksButton();
    });
	function post (email) {
		console.log(email);
	};

	var showThanksButton = function() {
		signUpInput.fadeOut();
		signUpButton.text("Thanks for signing up");
		signUpButton.unbind("click");
		signUpButton.css("cursor", "default");
	};

	signUpButton.on('click', function(event) {

 	});


});
