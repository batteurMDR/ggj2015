function Tree()
{

    this.frame = game.earthFramesList[1 + 2 * Math.round(Math.random()*(4))];
    
    this.height = 434;//352*this.frame.scale;
    this.width = 336;//256*this.frame.scale;434

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


    this.spriteAnimator = function()
    {
        var sprite_sequence = new Array();
        for(var i = 0; i < 60; i++)
        {
            sprite_sequence.push(i);
        }

        $('#'+this.id).animateSprite({
        fps: 15,
        loop: false,
        animations: {
            grow: sprite_sequence
            
        },
        complete: function(){
            //alert('Sprite animation complete!');
        }
        });
        $('#'+this.id).animateSprite('play', 'grow');
    }
}


Tree.prototype=new GameObject();
Tree.count = 0;

Tree.prototype.addItemToScreen=function()
{
    //console.log('Tree addItem'+this.id+"back"+this.background);
    GameObject.prototype.addItemToScreen.apply(this);

    //$("#"+this.id ).css('background-image',"url('img/gameObject/Tree/"+this.background+"')");
    $("#"+this.id ).css('background-image',"url('img/gameObject/Tree/tree_anim.png')");
    this.spriteAnimator();

}

