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
	this.change = Math.round(Math.random()*8000);
	this.is = 0;
    this.frame = game.frameHandler.earthFramesList[0];
	this.height = 121;
	this.width  = 145; 
    this.zIndex = this.frame.id;
    this.name = "chimere";    
    this.id = "Chimere"+Chimere.count;
    this.minY = this.frame.maxY-25;
    this.maxY = this.frame.maxY;
    this.sens = -1;
    this.timer = null;
    Chimere.count++;

    this.walk = function()
    {
    	this.height = 121;
    	this.width = 145;
    	this.is = 1;
    	$('#'+this.id).css({'height':this.height+'px',"width":this.width+'px'});
        var width = game.screen_width;
        var vitesse = 30; 
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

    this.jump = function()
    {
    	this.height = 121;
    	this.width = 144;
    	this.is = 2;
    	$('#'+this.id).css({'height':this.height+'px',"width":this.width+'px'}).addClass('jump');
    }

    this.stay = function()
    {
    	this.height = 121;
    	this.width = 145;
    	this.is = 0;
    	$('#'+this.id).css({'height':this.height+'px',"width":this.width+'px'}).addClass('stay');
    }

    this.spriteAnimatorWalk=function()
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

    this.spriteAnimatorStay=function()
    {
    	$('#'+this.id).animateSprite({
	        fps: 15,
	        loop: true,
	        animations: {
            	stay: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        	},
        	complete: function(){
            	//alert('Sprite animation complete!');
        	}
        });
        $('#'+this.id).animateSprite('play', 'stay');
    }


    this.spriteAnimatorJump=function()
    {
    	$('#'+this.id).animateSprite({
	        fps: 18,
	        loop: true,
	        animations: {
            	jump: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        	},
        	complete: function(){
            	//alert('Sprite animation complete!');
        	}
        });
        $('#'+this.id).animateSprite('play', 'jump');
    }



    this.move = function()
    {
    	var that = this;
    	setInterval(function(){
    		clearInterval(that.timer);
    		if(that.is==0){
    			$('#'+that.id).removeClass('stay');
    			that.spriteAnimatorWalk();
    			that.timer = setInterval(that.walk.bind(that),1/that.fps*1000);
    		}else if(that.is==1){
    			that.spriteAnimatorJump();
    			that.timer = setInterval(that.jump.bind(that),1/that.fps*1000);
    		}else if(that.is==2){
    			$('#'+that.id).removeClass('jump');
    			that.spriteAnimatorStay();
    			that.timer = setInterval(that.stay.bind(that),1/that.fps*1000);
    		}
    	},this.change);
    }
}



Chimere.prototype=new GameObject();
Chimere.count = 0;

Chimere.prototype.addItemToScreen=function()
{
    GameObject.prototype.addItemToScreen.apply(this);
    this.move();
}