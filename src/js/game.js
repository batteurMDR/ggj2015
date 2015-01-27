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

	sound : {

		fond : null,

		fire : null,

		water : null,

		lava : null,

		lightning : null,

		rain : null,

		bird : null,

		wind : null,

		voice : {

			intro : null,

			fireclick : null,

			fireclicks : null,

			waterclickw : null,

			waterclickt : null,

			lightningclick : null,

			lightningclicks : null,

			grass : null,

			raining : null,

			seedhover : null

		}

	},

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
        
        audio.addElems([
        	["fond","sounds/fond.ogg"],
        	["lava","sounds/lava.ogg"],
        	["fire","sounds/fire.ogg"],
        	["lightning","sounds/lightning.ogg"],
        	["rain","sounds/rain.ogg"],
        	["bird","sounds/bird.ogg"],
        	["wind","sounds/wind.ogg"],

        	["vintro","sounds/voices/1_1.ogg"],

        	["vfireclick","sounds/voices/2_3.ogg"],
        	["vwaterclickw","sounds/voices/2_4.ogg"],
        	["vfireclicks","sounds/voices/2_5.ogg"],

        	["vwaterclickt","sounds/voices/3_1.ogg"],

        	["vlightningclick","sounds/voices/4_2.ogg"],
        	["vlightningclicks","sounds/voices/4_3.ogg"],

        	["vgrass","sounds/voices/5_1.ogg"],

        	["vraining","sounds/voices/4_2.ogg"],

        	["vseedhover","sounds/voices/7_1.ogg"],


        	["voutro","sounds/voices/9_1.ogg"],

        ]);
        this.sound.fond = new Sound('fond');
        this.sound.fond.loop();
        this.sound.fond.setVolume(20);
        this.sound.fond.play();

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
		//$('#screen')[0].style.background='#000';

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
	                    //seed.spriteAnimator();
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
