function Chimere()
{
	frame = Math.round(Math.random()*3)+1;
	switch(frame){
		case 1:
			frame = 0;
			break;
		case 2:
			frame = 2;
			break;
		case 3:
			frame = 4; 
			break;
	}
    this.frame = game.frameHandler.earthFramesList[0];
	this.height = 121;
	this.width  = 145; 
    this.zIndex = this.frame.id;
    this.name = "chimere";    
    this.id = "Chimere"+Chimere.count;
    this.minY = this.frame.maxY-25;
    this.maxY = this.frame.maxY;
    this.sens = -1;
    Chimere.count++;

    this.animate = function()
    {
        var width = game.screen_width;
        var vitesse = 90; 
        this.x = this.x + vitesse * 1/game.fps * this.sens;
        if(this.x>(width-this.width)){
            this.sens= -1;
             $('#'+this.id).css('-webkit-transform', 'scaleX(1)');
        }
        if(this.x<0){
            this.sens = 1;
            $('#'+this.id).css('-webkit-transform', 'scaleX(-1)');
        }
        $('#'+this.id).css({'left':this.x+'px'});
    }

    this.spriteAnimator=function()
    {
    	$('#'+this.id).animateSprite({
	        fps: 18,
	        loop: true,
	        animations: {
            	walk: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        	},
        	complete: function(){
            	//alert('Sprite animation complete!');
        	}
        });
        $('#'+this.id).animateSprite('play', 'walk');
    }
}



Chimere.prototype=new GameObject();
Chimere.count = 0;

Chimere.prototype.addItemToScreen=function()
{
    GameObject.prototype.addItemToScreen.apply(this);
    this.spriteAnimator();
}