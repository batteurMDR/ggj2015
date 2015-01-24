function Tree(frame, posX)
{
    if(frame == undefined || (frame < 0 || frame > 10)){
        frame = 1 + 2 * Math.round(Math.random()*(4));
    }
    while(!game.frameHandler.earthFramesList[frame].addTree() && frame <= 10){
        frame+= 2;
    }
    console.log(frame);
    this.frame = game.frameHandler.earthFramesList[frame];
    
    this.height = 352*this.frame.scale;
    this.width = 256*this.frame.scale;
    this.background = "arbre"+this.width+".png";
    //alert(this.frame);
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
            this.animable= false;
        //}
       // this.height++;
       $('#'+this.id).height(this.height).offset({top:$('#'+this.id).offset().top-1}); 
    }
    /*this.generateCoordinate = function(){
        var y = this.frame.maxY;
        var x = Math.round(Math.random() * ($(window).width()));
        this.setCoordinate(x,y);
    }*/
}


Tree.prototype=new GameObject();
Tree.count = 0;

Tree.prototype.addItemToScreen=function()
{
    console.log('Tree addItem'+this.id+"back"+this.background);
    GameObject.prototype.addItemToScreen.apply(this);

    $("#"+this.id ).css('background-image',"url('img/gameObject/Tree/"+this.background+"')");
    $('#'+this.id).css('opacity', this.frame.opacity);

}
