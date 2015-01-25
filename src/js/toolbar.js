function Toolbar()  
{

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
