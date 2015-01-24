function Tree()
{
    this.height = 512;
    this.width = 512;
    this.zIndex = 5;
    this.name = "tree";

    this.minY = 500;
    this.maxY = 750;

}


Tree.prototype=new GameObject();