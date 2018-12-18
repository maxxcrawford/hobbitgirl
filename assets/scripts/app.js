	(function($) {
		"use strict";

		var passwordCheck = function() {
			console.log('passwordCheck');
			var answer = $('#password').val();
			console.log(answer);
			if (answer.toLowerCase() == 'Mellon' || answer.toLowerCase() == 'friend') {
				window.location.href = 'homepage.html';
			} else {
				alert('Please check your passcode and try again');
			}
		};

		$("#durin").submit(function(event) {
			console.log('submit');
			event.preventDefault();
			passwordCheck();
		});

	})(jQuery);
