function LevelManager()
{
	this.nCurrentLevel = 1;
	/*Gere les enchainements de levels*/
	this.init = function()
	{
		level = this.getLevel();
		level.init();
	}

	this.getLevel = function()
	{
		switch(this.nCurrentLevel)
		{
			case 1:
				return new LevelDarkWorld();
			case 2:
				return new LevelLavaWorld();
			case 3:
				return new LevelWaterWorld();
			case 4:
				return new LevelLightingWorld();
			case 5:
				return new LevelRainyWorld();
			case 6:
				return new LevelGrassWorld();
			case 7:
				return new LevelTreeWorld();
			case 8:
				return new LevelCreatureWorld();
			case 9:
				return new LevelFinished();

		}
	}

}