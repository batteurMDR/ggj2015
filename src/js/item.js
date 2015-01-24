function Tree(x, y){
    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = 10;
    this.zIndex = 5;
    this.name = "tree";
    this.add = function(){
        // ajouter en bas sur les coordonnées.
        alert("Tree créé en "+x+"x"+y);
    }
}
Tree.minY = 500;
Tree.maxY = 750;
function Bird(x, y){
    this.x = x;
    this.y = y;
    this.height = 5;
    this.width = 5;
    this.zIndex = 10;
    this.name = "bird";
    this.move = function(){
        // ajouter en bas sur les coordonnées.
        //alert("Bird créé en "+x+"x"+y);
    }
    this.move();
}
Bird.minY = 00;
Bird.maxY = 250;
function Cloud(x, y){
    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = 50;
    this.zIndex = 10;
    this.name = "cloud";
    this.move = function(){
        // ajouter en bas sur les coordonnées.
        //alert("Bird créé en "+x+"x"+y);
    }
    this.move();
}
Cloud.minY = 00;
Cloud.maxY = 250;
