function Cloud()
{
    this.height = 50;
    this.width = 50;
    this.zIndex = 10;
    this.name = "cloud";

    this.minY = 00;
    this.maxY = 250;

    this.move = function(){
        // ajouter en bas sur les coordonnées.
        //alert("Bird créé en "+x+"x"+y);
    }
    this.move();
}


Cloud.prototype=new GameObject();