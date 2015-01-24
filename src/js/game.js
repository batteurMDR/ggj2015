


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
		$('#cloudscontainer').hide();
		this.swapBackground();
		this.toolbar.show();
		this.gameLoop();
	 },

	swapBackground:function()
	{
		$('#screen').css(
	 							"background-image", "url(img/backgrounds/ingame.png)"
	 						);
	},


	 restart:function()
	 {
	 	$('.item').each(function()
	 						{
	 							$(this).remove();
	 						});
	 	this.gameObjectList = [];
	 	this.toolbar.hide();
	 	this.splash_screen.show();
	 	this.splash_screen.setBackground();
	 	$('#cloudscontainer').show();

	 },

	 gameLoop : function()
	 {
	 	this.timer = setInterval(this.animate.bind(this),1/this.fps*1000);
	 },

	 animate : function()
	 {
	 	for(var oGameObject in this.gameObjectList )
	 	{
            if(this.gameObjectList[oGameObject].animable){
	 		    this.gameObjectList[oGameObject].animate();
            }
	 	}
	 },

	 addGameObjectToList : function(oGameObject)
	 {
	 	this.gameObjectList.push(oGameObject);
	 }
}
