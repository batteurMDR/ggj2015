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
	this.height = 200;
	this.width  = 400; 
    this.zIndex = this.frame.id;
    this.name = "chimere";    
    this.id = "Chimere"+Chimere.count;
    this.minY = this.frame.maxY-25;
    this.maxY = this.frame.maxY;
    Chimere.count++;

    this.spriteAnimator = function()
    {

    }
}



Chimere.prototype=new GameObject();
Chimere.count = 0;

Chimere.prototype.addItemToScreen=function()
{
    GameObject.prototype.addItemToScreen.apply(this);
    this.spriteAnimator();
}