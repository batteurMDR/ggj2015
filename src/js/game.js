var game =
{
	sens 			: 1,
	fps 			: 25,
	toolbar 		: undefined,
	splash_screen 	: undefined,
	background 		: null,
	screen_width	: 0,
	parallax 		: undefined,
	dnd 			: null,
	levelmanager    : null,

    treeGameObjectList: [],
  
	gameObjectList 	: [],
    earthFramesList : [],

	sens : 1,
	fps : 25,
	toolbar : undefined,
	splash_screen : undefined,
	background:null,

	gameObjectList : [],

	music : null,


	 init : function()
	 {
	 	this.screen_width 	= $('#screen').width();
	 	this.screen_height 	= $('#screen').height();
	 	//this.background 	= new Background(["img/backgrounds/ingame2.png","img/backgrounds/ingame3.png"]);
	 	this.toolbar 		= new Toolbar();
	 	this.toolbar.init();
	 	this.dnd 			= new DragnDrop();
	 	this.dnd.init();

	 	this.splash_screen 	= new SplashScreen();
	 	this.splash_screen.init();
        
        this.frameHandler = new FrameHandler();
        this.frameHandler.generateFrames();
        
        audio.addElem("music","sounds/music.ogg");
        this.music = new Sound('music');
        this.music.loop();
        this.music.setVolume(20);
        this.music.play();

	 },


	 parallaxLauncher:function()
	 {
	 	var scene = document.getElementById('screen');
		this.parallax = new Parallax(scene,
			{
				scalarX: 1,
  				scalarY: 1,
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

		this.levelmanager = new LevelManager();
		this.levelmanager.init();


		this.parallaxLauncher();
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
	 	this.timer_renderer = setInterval(this.animate.bind(this),1/this.fps*1000);
   	 	this.timer_colision_detector = setInterval(this.colision_detector.bind(this),400);
    },

	 animate : function()
	 {
	 	for(var oGameObject in this.gameObjectList )
	 	{
            var gameObject = this.gameObjectList[oGameObject];
         
            if(gameObject.animable){
        
	 		    gameObject.animate();
            }
	 	}
	 },

	 colision_detector:function()
	 {
	 	for(var oGameObject in this.gameObjectList )
	 	{
            var gameObject = this.gameObjectList[oGameObject];
         
            if(gameObject.animable){
        
	 		    if(gameObject.id.substr(0,9)=='CloudRain')
	 		    	this.detectSeedGrowth(gameObject);
            }
	 	}
	 },


	 detectSeedGrowth: function(oCloudRain)
	 {
        for(var key in this.treeGameObjectList)
        {
        	if(this.treeGameObjectList[key].animable)
        	{
        		var seed = this.treeGameObjectList[key];

            	if(seed.x> oCloudRain.x &&  seed.x + seed.width < oCloudRain.x + oCloudRain.width){
                
	                setTimeout(function(){
	                	//console.log('On anime la graine='+seed.id);
	                    seed.spriteAnimator();
	                }, 1000);
				}
            }
        }
        
	 },

	 addGameObjectToList : function(oGameObject)
	 {
        if(oGameObject instanceof Tree){
            this.treeGameObjectList.push(oGameObject);
        }else{
	 	    this.gameObjectList.push(oGameObject);
        }
	 }
}
