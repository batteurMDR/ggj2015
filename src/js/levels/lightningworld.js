function LevelLightingWorld()
{
	this.init = function()
	{
		this.title = "The Lightning";

		//game.background.destroy();
		 var div = $('<div/>',
		    {"class":"background1 treeworld"})
				.css("background","url(img/backgrounds/level_treeworld/slice1.png)")
				.css("z-index", 0)
                //.css("background-repeat", "no-repeat")
                .css("background-position-x", "50%")
                .hide()
                .appendTo($('#screen'))    
                .fadeIn({
                        duration:2000,
                    });
      var div = $('<div/>',
		    {"class":"background lightningworld"})
				.css("background-color","black")
				.css("z-index", 1)
                
                .prependTo($('#screen'))    
                
                
                 

		//game.background.init();
    //game.toolbar.show();
		this.showLevelTitle(this.prepareUserInterface.bind(this));
		//game.toolbar.show();

		game.sound.voice.lightningclicks = new Sound("vlightningclicks");
		game.sound.voice.grass = new Sound("vgrass");

	}


	this.prepareUserInterface = function()
	{
		var scr = $('#background_0');
		var self = this;
            $('.btn.lightning').click(function(){
               var $wrapper =  $('<div>');
               $('<div>').css("background-image", "url('img/backgrounds/level_lightningworld/thunder_background.png')").addClass('background')
                    .appendTo($wrapper);
               $('<div>').css("background-image", "url('img/backgrounds/level_lightningworld/lava_thunder.png')").addClass('background')
                    .appendTo($wrapper);
               $('<div>').css({
                   "background-image": "url('img/backgrounds/level_lightningworld/cloud_Thunder.png')",
                   "background-repeat": "no-repeat",
                   "background-position-x": "50%" 
                   
                   }).addClass('background')
                    .appendTo($wrapper);
                game.background = new Background([
											"img/backgrounds/level_lightningworld/rain0.png",
											"img/backgrounds/level_lightningworld/rain1.png",
											"img/backgrounds/level_lightningworld/rain2.png"
																					],
                                            "lightningworld",
                                            false,
											3000);
    
                    
               $wrapper.appendTo($("#screen")).hide()
                    .css('z-index', 2);
               self.thunder($wrapper, 0);
                $(this).hide();
               
            });
           
		
	};
    this.thunder = function($wrapper,time){
        var self = this;
       if(time < 3){ 
               setTimeout(function(){
                   $wrapper.fadeIn({
                        duration:200,
                        complete:function(){
                          
                            $wrapper.fadeOut({
                                duration: 800, 
                                complete:function(){
                                    self.thunder($wrapper, time+1); 
                                }
                            });
                        }
                    });
               }, Math.random()* 1000);
       }else{
           setTimeout(self.showRain.bind(self), 1000);
       }
    }

    this.youWin = function(){

        game.background.destroy();
        game.sound.voice.lightningclicks.play();



        NicePopUP("It worked! It's raining","",
          game.levelmanager.nextLevel.bind(game.levelmanager));
    }


  this.showRain = function()
  {
    //game.sound.rain.play();
    game.background.destroy();
        game.background = new Background([
                      "img/backgrounds/level_waterworld/rain0.png",
                      "img/backgrounds/level_waterworld/rain1.png",
                      "img/backgrounds/level_waterworld/rain2.png"
                      ],
                      "lightningworld"
                      ,true
                      ,300
                      );
        game.background.init();
        setTimeout(this.youWin.bind(this), 5000);
  }

	
	
}

LevelLightingWorld.prototype =new Level();

LevelLightingWorld.prototype.youLoose = function()
{
	NicePopUP("This is not the begining",
			"Water isn't the begining",null);

};
