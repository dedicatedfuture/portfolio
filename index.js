$(document).ready(function(){

	var parallaxImagesleft1 = $('.left1');
	var parallaxImagesright1 = $('.right1');
	var parallaxImagesleft2 = $('.left2');
	var parallaxImagesright2 = $('.right2');
	var parallaxImagesleft3 = $('.left3');
	var parallaxImagesright3 = $('.right3');
	var one = $('.one');
	var two = $('.two');
	var three = $('.three')


	$(window).scroll(function(){
		var topDistance = $(window).scrollTop()

		if (topDistance < 300 && $(window).width() > 411){
			parallaxImagesleft1.css({
				'left': '-600px'
			})
			parallaxImagesright1.css({
				'right': '-600px'
			})
			parallaxImagesleft2.css({
				'left': '-600px'
			})
			parallaxImagesright2.css({
				'right': '-600px'
			})
			parallaxImagesleft3.css({
				'left': '-600px'
			})
			parallaxImagesright3.css({
				'right': '-600px'
			})
		}else if (topDistance > 300 && topDistance <500 && $(window).width() > 411){
			one.css({
				'display': 'none'
			});
			two.css({
				'display': 'none'
			});
			three.css({
				'display': 'none'
			});
			parallaxImagesleft1.css({
				'left': (window.pageYOffset - 500) 
			})
			parallaxImagesright1.css({
				'right': (window.pageYOffset - 500) 
			})
			parallaxImagesleft2.css({
				'left': (window.pageYOffset - 700) 
			})
			parallaxImagesright2.css({
				'right': (window.pageYOffset - 700) 
			})
			parallaxImagesleft3.css({
				'left': (window.pageYOffset - 900) 
			})
			parallaxImagesright3.css({
				'right': (window.pageYOffset - 900) 
			})

		}else if (topDistance > 517 && topDistance < 701 && $(window).width() > 411){
			one.fadeIn('800');	
			two.css({
				'display': 'none'
			});
			three.css({
				'display': 'none'
			});	
			parallaxImagesleft1.css({
				'left': '0px'
			});
			parallaxImagesright1.css({
				'right': '0px'
			});
			parallaxImagesleft2.css({
				'left': (window.pageYOffset - 700) 
			})
			parallaxImagesright2.css({
				'right': (window.pageYOffset - 700) 
			})
			parallaxImagesleft3.css({
				'left': (window.pageYOffset - 900) 
			})
			parallaxImagesright3.css({
				'right': (window.pageYOffset - 900) 
			})
		}else if (topDistance > 702 && topDistance < 899 && $(window).width() > 411){
			one.css({
				'display': 'inline'
			});	
			two.fadeIn('800')
			three.css({
				'display': 'none'
			});	
			parallaxImagesleft1.css({
				'left': '0px'
			})
			parallaxImagesright1.css({
				'right': '0px'
			})
			parallaxImagesleft2.css({
				'left': '0px'
			})
			parallaxImagesright2.css({
				'right': '0px'
			})
			parallaxImagesleft3.css({
				'left': (window.pageYOffset - 900) 
			})
			parallaxImagesright3.css({
				'right': (window.pageYOffset - 900) 
			})
			
		}else if (topDistance > 899){
			one.css({
				'display': 'inline'
			});	
			two.css({
				'display': 'inline'
			});
			three.fadeIn('800');
			parallaxImagesleft1.css({
				'left': '0px'
			})
			parallaxImagesright1.css({
				'right': '0px'
			})
			parallaxImagesleft2.css({
				'left': '0px'
			})
			parallaxImagesright2.css({
				'right': '0px'
			})
			parallaxImagesleft3.css({
				'left': '0px'
			})
			parallaxImagesright3.css({
				'right': '0px'
			})
		}

		
		console.log(topDistance)



	})

	


	

	


});