


var game =
{
	sens : 1,
	fps : 25,

	originalBirdVerticalPosition:0,

	gameObjectList : [],


	 init : function()
	 {
	 	toolbar.init();
	 	var splash_screen = new SplashScreen();
	 	splash_screen.init();

		//var oPosition = $('#bird').position();
		//this.originalBirdVerticalPosition = oPosition.top,

	 	this.gameLoop();


	 },

	

	 gameLoop : function()
	 {
	 	this.timer = setInterval(this.animate.bind(this),1/this.fps*1000);
	 },

	 animate : function()
	 {
	 	/*for(var oGameObject in this.gameObjectList )
	 	{
	 		oGameObject.animate();
	 	}*/
	 },

	 addGameObjectToList : function(oGameObject)
	 {
	 	this.gameObjectList.push(oGameObject);
	 }
}