function Level()
{
	this.title 				= "Level Title -> must be implemented in subclasses";
	this.main_background_url = "";
	this.parallax_pictures	=	[
									{
										x		: 0,
										y		: 0,
										img_src	: '',
										depth 	: 1.0
									}
								];

	//Must be implemented in sub classes
	this.finished = function()
	{

	}

	this.restart = function()
	{

	}

	this.showLevelTitle = function(callback)
	{
		var $item = $('<div/>',
                            {
                                "class":"level_title animated wobble",
                                "data-depth":this.parallax_depth
                            }
                    );
 
 		$item.text(this.title);
        $('#screen').append($item);
        setTimeout(this.hideLevelTitle.bind(this,callback),2000);
	}

	this.hideLevelTitle = function(callback)
	{
		$('.level_title').fadeOut(400,function(){
			$(this).remove();
			callback();
		});

	}

	this.destroy = function(nameLevel){
		var toolbar = $("#toolbar");
	
        	$(".background."+nameLevel).each(function(){

			$(this).remove();
		});
       
	}
}

