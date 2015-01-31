function Background(backgrounds, currentLevel, boucle, timing)
{
    if(timing ==undefined)
        timing = 5000;
	this.timing = timing;
	this.backgrounds = backgrounds;
	this.count = this.backgrounds.length;
	this.nCurrentBackgroundIndex = 0;
	this.interval = null;
    this.currentLevel = currentLevel;
    this.current = 0;
    this.infiniteLoop = boucle;
    var self = this;

   

				
	

	this.next=function(){
		
		if(this.backgrounds.length==1)
			return;

		var old = this.current;
		this.current++;



		if(this.current==this.count && this.infiniteLoop){
			this.current = 0;
		}
		if(this.current==this.count && !this.infiniteLoop) 
		{
			var last = this.count-1;

            $('#background_'+(old)).fadeOut({duration:timing});

            $('#background_'+last).fadeIn({duration:timing});
        	return;    
        } 
        
        if(this.current<this.count)
        {
            $('#background_'+this.current).fadeIn({duration:timing});
           // var old = this.current-1;
           // if(this.current==0)
            //	old = this.count-1;


            $('#background_'+old).fadeOut({duration:timing, complete: this.next.bind(this)});

        }
        
				
	}

	this.init=function(){
		this.current = 0;


		 for (var i = 0; i < this.count; i++) 
		 {
			var div = $('<div/>',
					{"class":"background "+currentLevel,"id":'background_'+i})
					.css("background","url("+this.backgrounds[i]+")")
					.css("z-index", 1)
                    .hide()
                	.appendTo($('#screen'));    
                    if(i == 0)
                    {
                        div.fadeIn({
                            duration:2000,
                            complete:function(){
                                self.next();
                            }
                        });
                    }
         }
        
	}

	this.destroy=function()
	{
       // console.log("destroying Background");
        $('.background.'+this.currentLevel+':visible').attr('id', 'azd').stop().css('z-index', 1).fadeOut({
            duration:3000, 

            complete:this.destroyLevelBackground.bind(this)
        });
        $('.background').stop();
	}
    this.destroyLevelBackground=function(){
    	console.log('destroyLevelBackground');
        game.levelmanager.level.destroy(this.currentLevel);
    }
}

