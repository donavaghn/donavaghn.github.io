$(function () {
			// All jQuery code goes here

//			$('#alcoveLogo').css('opacity', 0.4);

//			$('.servicesBtn').css('color', '#FFF');
			
			$('button').css('border', '1px solid red');
			
			$('h2').css('border', '1px solid red');
			
			$('input[name$="Val"]').css('border', '1px solid red');
			
			$('input[name*="Num"]').css('border', '1px solid red');
			
//			$('#alcoveLogo').next().css('background-color','rgba(255, 0, 0, 0.2)')
			$('.box1').nextAll().css('background-color','rgba(255, 0, 0, 0.2)');
			
			$('.header').children().css('background-color','rgba(255, 0, 0, 0.2)');
			
			$(".navigation > li:eq(2)").parent().parent().parent().css('opacity','0.3');
			
			$('.servicesBtn').closest('div').css('background-color','rgba(255, 0, 0, 0.2)');
		})