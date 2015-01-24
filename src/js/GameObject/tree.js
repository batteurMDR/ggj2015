function Tree()
{
    this.height = 10;
    this.width = 10;
    this.zIndex = 5;
    this.name = "tree";
    this.id = "Tree"+Tree.count;
    this.minY = 500;
    this.maxY = 750;
    Tree.count++;
    this.animate = function(){
        if(this.height > 100){
            this.animable= false;
        }
        this.height++;
       $('#'+this.id).height(this.height).offset({top:$('#'+this.id).offset().top-1}); 
    }
}


Tree.prototype=new GameObject();
Tree.count = 0;
