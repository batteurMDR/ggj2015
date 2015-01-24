
function Bird()
{

    this.height = 39;
    this.width = 64;
    this.zIndex = 10;
    this.name = "bird";
    this.id = 'Bird'+Bird.count;
    this.minY = 00;
    this.maxY = 250;

    this.sens = 1;
    Bird.count++;
    this.parallax_depth =0.8;
    //GameObject.apply(this);


    this.animate = function()
    {
        //var oPosition = $('#bird').position();
        var width = $('#screen').width();

        var vitesse = 30;//Pixels / sec

        this.x = this.x + vitesse * 1/game.fps * this.sens;

        

        

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

    this.spriteAnimator = function()
    {
        $('#'+this.id).animateSprite({
        fps: 4,
        loop: true,
        animations: {
            flap: [0, 1,2,3]
            
        },
        complete: function(){
            //alert('Sprite animation complete!');
        }
        });
        $('#'+this.id).animateSprite('play', 'flap');
    }


    

}

Bird.count = 0;

Bird.prototype=new GameObject();

Bird.prototype.addItemToScreen=function()
{

    GameObject.prototype.addItemToScreen.apply(this);
    this.spriteAnimator();

}



        
