var game =
{
	sens 			: 1,
	fps 			: 25,
	toolbar 		: undefined,
	splash_screen 	: undefined,
	background 		: null,
	screen_width	: 0,
	parallax 		: undefined,

    treeGameObjectList: [],
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
        this.parallax();

	 },


	 parallax:function()
	 {
	 	var scene = document.getElementById('screen');
		this.parallax = new Parallax(scene,
			{
				scalarX: 30,
  				scalarY: 8,
  				relativeInput:false
			});
		this.parallax.enable();
	 },
	
	 parallax_update:function()
	 {
	 	this.parallax.updateLayers();
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
            var gameObject = this.gameObjectList[oGameObject];
            if(gameObject instanceof CloudRaindrop){
                for(var key in this.treeGameObjectList){
                    if(gameObject.x + gameObject.width >= this.treeGameObjectList[key].x && gameObject.x < this.treeGameObjectList[key].x + this.treeGameObjectList[key].width){
                        if(this.treeGameObjectList[key].animable){
                        setTimeout(function(){
                            console.log( game.treeGameObjectList[key]);
                            game.treeGameObjectList[key].spriteAnimator( game.treeGameObjectList[key].id);
                        }, 10000);
}
                    }
                }
            }
            if(gameObject.animable){
	 		    gameObject.animate();
            }
	 	}
	 },

	 addGameObjectToList : function(oGameObject)
	 {
        if(oGameObject instanceof Tree){
            this.treeGameObjectList.push(oGameObject);
        }
	 	this.gameObjectList.push(oGameObject);
	 }
}
