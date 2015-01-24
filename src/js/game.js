


var game =
{
	sens : 1,
	fps : 25,
	toolbar : undefined,
	splash_screen : undefined,
	originalBirdVerticalPosition:0,

	gameObjectList : [],


	 init : function()
	 {
	 	this.toolbar = new Toolbar();
	 	this.toolbar.init();

	 	this.splash_screen = new SplashScreen();
	 	this.splash_screen.init();

		//var oPosition = $('#bird').position();
		//this.originalBirdVerticalPosition = oPosition.top,

	 },

	
	 start:function()
	 {
		this.splash_screen.hide();
		this.toolbar.show();
		this.gameLoop();
	 },


	 restart:function()
	 {
	 	this.toolbar.hide();
	 	this.splash_screen.show();
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