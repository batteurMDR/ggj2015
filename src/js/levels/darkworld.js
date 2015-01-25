function LevelDarkWorld()
{

	this.init = function()
	{
		this.title = "The Dark World";

		//game.background.destroy();
		game.background = new Background(["img/backgrounds/level_darkworld/darkworld_background.png"]);
		game.background.init();

		this.showLevelTitle(this.showInstruction.bind(this));
		//game.toolbar.show();


	}


	this.prepareUserInterface = function()
	{
		var scr = $('#background_0');
		var self = this;
		$('<div/>',{"class":"darkworld item_fire"}).text('Fire').appendTo(scr).click(function(e){
			e.preventDefault();
			this.remove();
			$('.item_water').remove();
			self.youWin();
		});
		$('<div/>',{"class":"darkworld item_water"}).text('Water').appendTo(scr).click(function(e){
			e.preventDefault();
			this.remove();
			$('.item_fire').remove();
			self.youLoose();
		});
	}

	this.showInstruction = function()
	{
		NicePopUP("You are god.... and you can create the world as you want !",'What\'s your desire ?',this.prepareUserInterface.bind(this));
	}

	this.youLoose = function()
	{
		NicePopUP("This is not the begining","Water isn't the begining",this.prepareUserInterface.bind(this));
	}

	this.youWin = function()
	{
		NicePopUP("**WIN MSG**","ici",game.levelmanager.nextLevel());
	}
	
}

LevelDarkWorld.prototype =new Level();