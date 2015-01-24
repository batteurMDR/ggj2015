
function Bird()
{

    this.height = 5;
    this.width = 5;
    this.zIndex = 10;
    this.name = "bird";
    this.id = 'Bird'+Bird.count;
    this.minY = 00;
    this.maxY = 250;
    this.fps = 24;
    this.sens = 1;
    Bird.count++;
    this.animate = function()
    {
        //var oPosition = $('#bird').position();
        var width = $('#screen').width();

        var vitesse = 160;//Pixels / sec

        this.x = this.x + vitesse * 1/this.fps * this.sens;

        

        

        var angle  = this.x / width * 2 * 3.14;
        var amplitude_verticale = 100;
        var new_y =  this.y +(Math.sin(angle)*amplitude_verticale);

        if(this.x>width)
            this.sens=-1;
        if(this.x<0)
            this.sens = 1;

        $('#'+this.id).css(
                {
                'left':this.x+'px',
                'top':new_y+'px'
                }
                
            );
    }

}

Bird.count = 0;

Bird.prototype=new GameObject();



        
