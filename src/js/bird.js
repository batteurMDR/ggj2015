		

		var oPosition = $('#bird').position();
		var width = $('#screen').width();

		var vitesse = 160;//Pixels / sec

		var new_x = oPosition.left + vitesse * 1/this.fps * this.sens;

 		

 		

 		var angle  = new_x / width * 2 * 3.14;
 		var amplitude_verticale = 100;
		var new_y =  this.originalBirdVerticalPosition +(Math.sin(angle)*amplitude_verticale);

		if(new_x>width)
			this.sens=-1;
		if(new_x<0)
			this.sens = 1;

		$('#bird').css(
				{
				'left':new_x+'px',
				'top':new_y+'px'
				}
				
			);