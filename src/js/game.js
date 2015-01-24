var game =
{
	sens 			: 1,
	fps 			: 25,
	toolbar 		: undefined,
	splash_screen 	: undefined,
	background 		: null,
	screen_width	: 0,

	gameObjectList 	: [],
    earthFramesList : [],

	sens : 1,
	fps : 25,
	toolbar : undefined,
	splash_screen : undefined,
	originalBirdVerticalPosition:0,
	background:null,

	gameObjectList : [],


	 init : function()
	 {
	 	this.screen_width 	= $('#screen').width();
	 	this.background 	= new Background(["img/backgrounds/ingame2.png","img/backgrounds/ingame3.png"]);
	 	this.toolbar 		= new Toolbar();
	 	this.toolbar.init();

	 	this.splash_screen 	= new SplashScreen();
	 	this.splash_screen.init();
        
        this.frameHandler = new FrameHandler();
        this.frameHandler.generateFrames();
	 },



	
	 start:function()
	 {
		this.splash_screen.hide();
		$('#cloudscontainer').hide();
		this.background.init();
		this.toolbar.show();
		this.gameLoop();
	 },

	swapBackground:function()
	{
		$('#screen').css("background-image", "url(img/backgrounds/ingame.png)");
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
