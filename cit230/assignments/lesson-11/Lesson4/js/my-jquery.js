$(function() {
			// jQuery Code goes here
			console.log($('input[type="text"]').css('background-color'));

			inputFields = $('input[type="text"]');

			toggleStyle = function() {
				if (inputFields.css('background-color') === 'rgb(255, 0, 0)') {
					//Set background color to white
					inputFields.css('background-color', 'rgb(255, 255, 255)')
				} else {
					//Set background color to red
					inputFields.css('background-color', 'rgb(255, 0, 0)')
				}
			}

			var nameVal = $('input[name="nameVal"]');

			function fillEmpty() {
				if (nameVal.val() == '') {
					nameVal.val('John Doe');
				}
			}

			$('#ReqAQuoteBtn').click(toggleStyle);
			$('#ReqAQuoteBtn').click(fillEmpty);

			//		$('.coreValues').append("<li><strong>This is brand new !!</strong></li>");
			$("<li><strong>This is brand new !!</strong></li>").prependTo('.coreValues');

		})