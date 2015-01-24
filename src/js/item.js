function Tree(x, y){
    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = 10;
    this.zIndex = 5;
    this.add = function(){
        // ajouter en bas sur les coordonnées.
        alert("Tree créé en "+x+"x"+y);
    }
}
Tree.minY = 500;
Tree.maxY = 750;
