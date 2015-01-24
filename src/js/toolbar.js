var toolbar = 
		{
			init : function()
			{
				$('.btn').click(function(e){
					e.preventDefault();
					 $(this).addClass('animated bounce');
                    alert($(this).data("titleBtn"))
                    Generator($(this).data("titleBtn"));
				   
                });
			}
		}
