function Tree()
{

    this.height = 10;
    this.width = 10;

    this.height = 256;
    this.width = 256;

    this.zIndex = 5;
    this.name = "tree";

    this.minY = 650;
    this.maxY = 750;

    this.id = "Tree"+Tree.count;

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
