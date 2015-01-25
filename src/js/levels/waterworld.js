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
                .css("left", "25%")
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

	
	this.prepareUserInterface = function()
	{
		var scr = $('#screen');
		var self = this;
		$('<img/>',{"class":"waterworld item_lightning skill", "src":"img/levels/lightning.png"}).appendTo(scr).click(function(e){
			e.preventDefault();
			this.remove();
			//$('.item_water').remove();
			self.youWin();
            $('.btn.lightning').css('background-image', "url(img/levels/lightning.png)");
            
            
            
           
		});
	}

	

    this.youWin = function(){
        
        NicePopUP("Maybe that ...thing... I got will pierce them?","What about a try?", game.levelmanager.nextLevel.bind(game.levelmanager));
    }
	
	
}

LevelWaterWorld.prototype =new Level();

LevelWaterWorld.prototype.youLoose = function()
{
	NicePopUP("This is not the begining",
			"Water isn't the begining",null);

};
