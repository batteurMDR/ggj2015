function LevelWaterWorld()
{
	this.init = function()
	{
		this.title = "The Water World";

		//game.background.destroy();
		game.background = new Background([
											"img/backgrounds/level_waterworld/lava4.png",
											"img/backgrounds/level_waterworld/lava5.png",
											"img/backgrounds/level_waterworld/lava6.png",
											"img/backgrounds/level_waterworld/lava7.png",
											],
                                            "waterworld",
                                            false,
											3000);
        var div = $('<div/>',
		    {"class":"background1 waterworld"})
				.css("background","url(img/backgrounds/level_waterworld/cloud_noLight.png)")
				.css("z-index", 1)
                .css("background-repeat", "no-repeat")
                .css("background-position-x", "50%")
                .hide()
                .appendTo($('#screen'))    
                .fadeIn({
                        duration:2000,
                    });

		game.background.init();
        game.toolbar.show();

		this.showLevelTitle(this.prepareUserInterface.bind(this));
		//game.toolbar.show();


	}

	this.showRain = function()
	{
		game.background.destroy();
        game.background = new Background([
											"img/backgrounds/level_waterworld/rain0.png",
											"img/backgrounds/level_waterworld/rain1.png",
											"img/backgrounds/level_waterworld/rain2.png"
											],
                                            "waterworld"
											,3000);
        game.background.init();
        //setTimeout(this.youWin.bind(this,3000));
	}

	this.prepareUserInterface = function()
	{
		var scr = $('#background_0');
		var self = this;
		$('<img/>',{"class":"waterworld item_lightning skill", "src":"img/levels/lightning.png"}).insertBefore(scr).click(function(e){
			e.preventDefault();
			this.remove();
			//$('.item_water').remove();
			//self.youWin();
            $('.btn.lightning').css('background-image', "url(img/levels/lightning.png)");
            
            self.showRain();
            
           
		});
	}

	

    this.youWin = function(){
        
        NicePopUP("Maybe that ...thing... I got will pierce them?","What about a try?", game.levelmanager.nextLevel());
    }
	
	
}

LevelWaterWorld.prototype =new Level();

LevelWaterWorld.prototype.youLoose = function()
{
	NicePopUP("This is not the begining",
			"Water isn't the begining",null);

};
