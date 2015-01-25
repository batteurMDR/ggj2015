function LevelLavaWorld()
{
	this.init = function()
	{
		this.title = "The Lava World";

		//$('#screen').css("background-image", "url(img/backgrounds/ingame.png)");
		game.background = new Background([
											"img/backgrounds/level_lavaworld/lava0.png",
											"img/backgrounds/level_lavaworld/lava1.png",
											"img/backgrounds/level_lavaworld/lava3.png"
											],
                                            "lavaworld",
                                            true,
											1000);
		game.background.init();

		//this.showLevelTitle(this.prepareUserInterface.bind(this));
		//game.toolbar.show();
		var self = this;
        $('.btn.water').click(function(){
            
            $(this).hide(); 
            self.youWin();
        });

	}


	this.prepareUserInterface = function()
	{
		
	}

	this.youWin = function ()
	{
		game.background.destroy();
        NicePopUP("I should have thought that water will evaporate...", "How could I empty those clouds?", game.levelmanager.nextLevel.bind(game.levelmanager));
          
	}
	
}

LevelLavaWorld.prototype =new Level();

LevelLavaWorld.prototype.youLoose = function()
{
	NicePopUP("This is not the begining",
			"Water isn't the begining",null);

};
