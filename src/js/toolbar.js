var toolbar = 
		{
			init : function()
			{
				$('.btn').each(function(){
					var that = $(this);
					that.toggleClass('bounce');
					that.click(function(e){
						e.preventDefault();
						that.toggleClass('bounce');
						setTimeout(function(){
							that.toggleClass('bounce');
						},1000);
					});
				});
			}
		}