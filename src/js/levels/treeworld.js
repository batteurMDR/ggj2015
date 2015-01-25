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
		game.toolbar.show();
		this.parallax_pictures	=	[
									{
										x		: 0,
										y		: 0,
										img_src	: 'img/backgrounds/level_treeworld/slice1.png',
										depth 	: 1.0,
										zIndex	: 3
									},
									{
										x		: 900,
										y		: 250,
										img_src	: 'img/backgrounds/level_treeworld/slice2.png',
										depth 	: 0.7,
										zIndex	: 2
									},
									{
										x		: 700,
										y		: 400,
										img_src	: 'img/backgrounds/level_treeworld/slice3.png',
										depth 	: 0.5,
										zIndex	: 1
									}
								];

		var parallaxGenerator = new ParallaxSliceGenerator(this.parallax_pictures);
		parallaxGenerator.generate();
		game.parallaxLauncher();
		game.parallax_update();

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
