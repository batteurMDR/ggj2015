function Toolbar()  
{
    var pos;
    $('#draggable').draggable({
        start:function(){
            pos = $(this).closest('.btn').offset();
            
       
            
        }

        
        ,
        stop:function(){
            var frame = game.frameHandler.getCurrentTreeFrame($(this).offset().top);
            new Generator($(this).closest('.btn').data('titleBtn'), frame.id, $(this).offset().left);
            $(this).offset({top: pos.top + 5, left: pos.left + 5});
        }
    
    
    });
	this.init=function()
	{
        
		$('.btn:not(#btn_restart)').each(function(){
			var that = $(this);
			that.toggleClass('bounce');
            
		    	that.click(function(e)
			    {
				    e.preventDefault();
				    that.toggleClass('wobble');
				    setTimeout(function(){
					    that.toggleClass('wobble');
				    },1000);
                if(!that.hasClass('tree')){

                    new Generator(that.data("titleBtn"));
                }
			    });
            
			that.mouseover(function(){
				that.toggleClass('bounce');
				setTimeout(function(){
					that.toggleClass('bounce');
				},1000);
			});
		});
        
	}

	this.show=function()
	{
		$('#toolbar').show();
	}

	this.hide=function()
	{
		$('#toolbar').hide();
	}
}
