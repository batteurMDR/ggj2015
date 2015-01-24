


var game =
{
	sens : 1,
	fps : 25,

	originalBirdVerticalPosition:0,

	gameObjectList : [],
    earthFramesList : [],

	 init : function()
	 {
	 	toolbar.init();
	 	var splash_screen = new SplashScreen();
	 	splash_screen.init();
        this.generateFrames();
		//var oPosition = $('#bird').position();
		//this.originalBirdVerticalPosition = oPosition.top,

	 	this.gameLoop();


	 },

	 generateFrames: function(){
        for(var i = 1; i <= 10; i++){
            var scale = 0;
            if((i-1) % 2 == 1){
                scale = 1/Math.pow(2, (i)/2 - 1);
            } else {
                scale = 5 - i /2;
            }
            this.earthFramesList.push(new EarthFrame(scale, 700 - (i+1) * 20));
        }
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
