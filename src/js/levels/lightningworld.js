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

		game.sound.voice.lightninghover = new Sound("vlightninghover");
		game.sound.voice.lightningclick = new Sound("vlightningclick");
		game.sound.voice.grass = new Sound("vgrass");

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
        game.background.destroy();
        game.sound.voice.lightningclick.play();
        NicePopUP("It worked! It's raining","", function(){
			game.sound.voice.grass.play();
       	 	NicePopUP("Life is coming out of nowhere! But why does the grass appear first?","I maybe shouldn't have skipped the bio courses at God's college...", game.levelmanager.nextLevel())
    	});
    }
	
	
}

LevelLightingWorld.prototype =new Level();

LevelLightingWorld.prototype.youLoose = function()
{
	NicePopUP("This is not the begining",
			"Water isn't the begining",null);

};
