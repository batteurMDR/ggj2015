function LevelCreatureWorld()
{

	this.init = function()
	{
		this.title = "An inhabitable World";

		//game.background.destroy();
		
		
        this.prepareUserInterface();
		this.showLevelTitle(this.showInstruction.bind(this));
		//game.toolbar.show();

	}


	this.prepareUserInterface = function()
	{
       game.toolbar.init(); 
        game.toolbar.hideChildren(true);
	}

	this.showInstruction = function()
	{
       
	
	}

	this.youLoose = function()
	{
	
	}

	this.youWin = function()
	{
	
       
	}
	
}

LevelCreatureWorld.prototype =new Level();

