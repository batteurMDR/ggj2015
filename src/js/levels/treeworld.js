function LevelTreeWorld()
{
	this.init = function()
	{
		this.title = "The Tree World";

		//game.background.destroy();
		/*game.background = new Background([
											"img/backgrounds/level_lavaworld/lava0.png",
											"img/backgrounds/level_lavaworld/lava1.png",
											"img/backgrounds/level_lavaworld/lava3.png"
											]
											,1000);
		game.background.init();*/

		this.showLevelTitle(this.prepareUserInterface.bind(this));
		//game.toolbar.show();


	}


	this.prepareUserInterface = function()
	{
		
	}

	
	
}

LevelTreeWorld.prototype =new Level();

LevelTreeWorld.prototype.youLoose = function()
{
	NicePopUP("This is not the begining",
			"Water isn't the begining",null);

};