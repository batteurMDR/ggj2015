function LevelLightingWorld()
{
	this.init = function()
	{
		this.title = "The Lightning";

		//game.background.destroy();
		game.background = new Background([
											"img/backgrounds/level_waterworld/lava4.png",
											"img/backgrounds/level_waterworld/lava5.png",
											"img/backgrounds/level_waterworld/lava6.png",
											"img/backgrounds/level_waterworld/lava7.png",
											]
											,3000);
		game.background.init();
        game.toolbar.show();
		this.showLevelTitle(this.prepareUserInterface.bind(this));
		//game.toolbar.show();


	}


	this.prepareUserInterface = function()
	{
		var scr = $('#background_0');
		var self = this;
            $('.btn.lightning').click(function(){
                
                $(this).hide();
                self.youWin();
            });
           
		
	}
    this.youWin = function(){
        NicePopUP("It worked! It's raining","", NicePopUP("Life is coming out of nowhere! But why does the grass appear first?","I maybe shouldn't have skipped the bio courses at God's college...", game.levelmanager.nextLevel()));
    }
	
	
}

LevelLightingWorld.prototype =new Level();

LevelLightingWorld.prototype.youLoose = function()
{
	NicePopUP("This is not the begining",
			"Water isn't the begining",null);

};