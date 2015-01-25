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
		$('<img/>',{"class":"darkworld item_fire skill", "src":"img/levels/fire.png"}).appendTo(scr).click(function(e){
			e.preventDefault();
			this.remove();
			//$('.item_water').remove();
			//self.youWin();
            $('.btn.fire').css('background-image', "url(img/levels/fire.png)").on("click", function(){
                e.preventDefault();
                if($('.skill').length != 0)
                    NicePopUP("I'd like to learn as many skills I can.","No one knows what tomorrow will be about");
                else
                    self.youWin();
            });
		});
		$('<img/>',{"class":"darkworld item_water skill", "src":"img/levels/water.png"}).appendTo(scr).click(function(e){
			e.preventDefault();
			this.remove();
			//$('.item_water').remove();
			//self.youWin();
            $('.btn.water').css('background-image', "url(img/levels/water.png)").on("click", function(){
                e.preventDefault();
                self.youLoose();
            });
		});
        //var toolbar = new Toolbar();
        //toolbar.init();
        game.toolbar.show();
        game.toolbar.hideChildren(false);
	}

	this.showInstruction = function()
	{
        NicePopUP("I just got a world to play with.",'My mentor adviced me to destroy everything here to begin on a good basis.',this.prepareUserInterface.bind(this));
		//NicePopUP("You are god.... and you can create the world as you want !",'What\'s your desire ?',this.prepareUserInterface.bind(this));
	}

	this.youLoose = function()
	{
		NicePopUP("All stories tell about survivors of this.","And I don't really want to deal with this barbarians.");
	}

	this.youWin = function()
	{
		NicePopUP("Wake the Earth up! Fire the volcanoes!"," I will crush everything with lava!",function(){
			NicePopUP("Hum... Well. Maybe I got a bit too excited... ","How about pouring some water to cool things down",game.levelmanager.nextLevel());
		});
        $('.btn.fire').hide();
	}
	
}

LevelDarkWorld.prototype =new Level();

