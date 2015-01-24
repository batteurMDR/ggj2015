function Tree()
{

    this.frame = game.earthFramesList[1 + 2 * Math.round(Math.random()*(4))];
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
