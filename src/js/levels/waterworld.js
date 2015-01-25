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
											]
											,3000);
		game.background.init();

		this.showLevelTitle(this.prepareUserInterface.bind(this));
		//game.toolbar.show();


	}


	this.prepareUserInterface = function()
	{
		
	}

	
	
}

LevelWaterWorld.prototype =new Level();

LevelWaterWorld.prototype.youLoose = function()
{
	NicePopUP("This is not the begining",
			"Water isn't the begining",null);

};