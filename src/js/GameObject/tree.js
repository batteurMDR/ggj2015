function Tree(frame, posX)
{
    this.init = function (frame, posX){

        if(frame == undefined || (frame < 0 || frame > 10)){
            frame = 1 + 2 * Math.round(Math.random()*(4));
        }
        while(!game.frameHandler.earthFramesList[frame].addTree() && frame <= 10){
            frame+= 2;
        }
        this.parallax_depth =1;
        this.frame = game.frameHandler.earthFramesList[frame];
        this.height = 352*this.frame.scale;//434;
        this.width = 256*this.frame.scale;//336;
        
        this.zIndex = this.frame.id;
        this.name = "tree";
        this.id = "Tree"+Tree.count;
        this.minY = this.frame.maxY-25;
        this.maxY = this.frame.maxY;
        Tree.count++;

        if(posX != undefined){
            this.setCoordinate(posX, Math.round(Math.random() * (this.maxY - this.minY) + this.minY));
        }
    }

    this.spriteAnimator = function()
    {
        var sprite_sequence = new Array();
        for(var i = 0; i < 60; i++)
        {
            sprite_sequence.push(i);
        }

        $('#'+this.id).animateSprite({
            fps: 15,
            loop: false,
            animations: {
                grow: sprite_sequence
                
            },
            complete: function(){
            }
        });
        $('#'+this.id).animateSprite('play', 'grow');
        this.animable = false;
    }
    this.init(frame, posX);
}


Tree.prototype=new GameObject();
Tree.count = 0;

Tree.prototype.addItemToScreen=function()
{
    GameObject.prototype.addItemToScreen.apply(this);

    $("#"+this.id ).css('background-image',"url('img/gameObject/Tree/tree_anim.png')");
    //this.spriteAnimator();
}

