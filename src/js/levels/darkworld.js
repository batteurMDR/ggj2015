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
		/**
		var sHTML = '<div class="darkworld item_fire" onclick="LevelDarkWorld.finished();">Fire</div>'+
					'<div class="darkworld item_water"  onclick="LevelDarkWorld.youLoose();">Water</div>';

		
		$('#screen')[0].innerHTML+=sHTML;
		*/
		var scr = $('#background_0');
		var fire = $('<div/>',{"class":"darkworld item_fire"}).text('Fire');
       fire.on("click", function(){
            console.log("bla");   
       }) 
        
        fire.appendTo(scr);
		$('<div/>',{"class":"darkworld item_water"}).text('Water').appendTo(scr).hover(function(){
			console.log("ok");
		});
	}

	this.showInstruction = function()
	{
		NicePopUP("You are god.... and you can create the world as you want !",'What\'s your desire ?',this.prepareUserInterface.bind(this));
	}

	
	
}

LevelDarkWorld.prototype =new Level();

LevelDarkWorld.prototype.youLoose = function()
{
	NicePopUP("This is not the begining",
			"Water isn't the begining",null);

};
