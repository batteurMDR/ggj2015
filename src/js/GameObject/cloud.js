function Cloud()
{
    this.height = 500;
    this.width = 500;
    this.zIndex = 10;
    this.name = "cloud";

    this.minY = 250;
    this.maxY = 400;

}


Cloud.prototype=new GameObject();