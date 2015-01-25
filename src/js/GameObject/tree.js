function Tree(frame, posX)
{
    this.parallax_depth =1;

    if(frame == undefined || (frame < 0 || frame > 10)){
        frame = 1 + 2 * Math.round(Math.random()*(4));
    }
    while(!game.frameHandler.earthFramesList[frame].addTree() && frame <= 10){
        frame+= 2;
    }

    this.frame = game.frameHandler.earthFramesList[frame];
    this.height = 352*this.frame.scale;//434;
    this.width = 256*this.frame.scale;//336;
    //this.background = "arbre"+this.width+".png";
    
    this.zIndex = this.frame.id;
    this.name = "tree";
    this.id = "Tree"+Tree.count;
    this.minY = this.frame.maxY-25;
    this.maxY = this.frame.maxY;
    Tree.count++;
    if(posX != undefined){
        this.setCoordinate(posX, Math.round(Math.random() * (this.maxY - this.minY) + this.minY));
    }
    this.animate = function(){
        //if(this.height > 100){
           // this.animable= false;
        //}
       // this.height++;
       
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
}


Tree.prototype=new GameObject();
Tree.count = 0;

Tree.prototype.addItemToScreen=function()
{
    //console.log('Tree addItem'+this.id+"back"+this.background);
    GameObject.prototype.addItemToScreen.apply(this);


    //$("#"+this.id ).css('background-image',"url('img/gameObject/Tree/"+this.background+"')");
    $("#"+this.id ).css('background-image',"url('img/gameObject/Tree/tree_anim.png')");
    //this.spriteAnimator();
    
//    $("#"+this.id ).css('background-image',"url('img/gameObject/Tree/"+this.background+"')");
//    $('#'+this.id).css('opacity', this.frame.opacity);


}

