function LevelLavaWorld()
{
	this.init = function()
	{
		this.title = "The Lava World";

		//game.background.destroy();
		game.background = new Background([
											"img/backgrounds/level_lavaworld/lava0.png",
											"img/backgrounds/level_lavaworld/lava1.png",
											"img/backgrounds/level_lavaworld/lava3.png"
											],
                                            "lavaworld"
											,1000);
		game.background.init();

		//this.showLevelTitle(this.prepareUserInterface.bind(this));
		//game.toolbar.show();

		game.sound.voice.waterclickt = new Sound("vwaterclickt");

        $('.btn.water').click(function(){
           game.background.destroy();
           game.sound.voice.waterclickt.play();
           NicePopUP("I should have thought that water will evaporate...", "How could I empty those clouds?", game.levelmanager.nextLevel());
          $(this).hide();  
            
        });

	}


	this.prepareUserInterface = function()
	{
		
	}

	
	
}

LevelLavaWorld.prototype =new Level();

LevelLavaWorld.prototype.youLoose = function()
{
	NicePopUP("This is not the begining",
			"Water isn't the begining",null);

};
