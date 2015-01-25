function LevelDarkWorld()
{

	this.init = function()
	{
		this.title = "The Dark World";

		//game.background.destroy();
		game.background = new Background(["img/backgrounds/level_darkworld/darkworld_background.png"], "darkworld");
		game.background.init();

		this.showLevelTitle(this.showInstruction.bind(this));
		//game.toolbar.show();
		game.sound.voice.intro = new Sound("vintro");
		game.sound.voice.firehover = new Sound("vfirehover");
		game.sound.voice.waterclickw = new Sound("vwaterclickw");
		game.sound.voice.fireclick = new Sound("vfireclick");
		game.sound.voice.fireclicks = new Sound("vfireclicks");


	}


	this.prepareUserInterface = function()
	{
		var scr = $('#background_0');
		var self = this;
		$('<img/>',{"class":"darkworld item_fire skill", "src":"img/levels/fire.png"}).appendTo(scr).hover(function(){
			game.sound.voice.firehover.play();
		}).click(function(e){
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
        NicePopUP("As a god, I learned that I just have to click on  a caps containing a skill to acquire it.","As I often think, you will often see windows like this one, just click on it to let the thought go", this.begin.bind(this));
        
        
    }
    this.begin=function(){
    	game.sound.voice.intro.play();
        NicePopUP("I just got a world to play with.",'My mentor adviced me to destroy everything here to begin on a good basis.',this.prepareUserInterface.bind(this));
		//NicePopUP("You are god.... and you can create the world as you want !",'What\'s your desire ?',this.prepareUserInterface.bind(this));
	}

	this.youLoose = function()
	{
		game.sound.voice.waterclickw.play();
		NicePopUP("All stories tell about survivors of downpour.","And I don't really want to deal with this barbarians.");
	}

	this.youWin = function()
	{
        game.background.destroy();
        game.sound.voice.fireclick.play();
		NicePopUP("Wake the Earth up! Fire the volcanoes!"," I will crush everything with lava!",function(){
        	game.sound.voice.fireclicks.play();
			NicePopUP("Hum... Well. Maybe I got a bit too excited... ","How about pouring some water to cool things down",game.levelmanager.nextLevel());
		});
        $('.btn.water').off('click'); 
        $('.btn.fire').hide();
	}
	
}

LevelDarkWorld.prototype =new Level();

