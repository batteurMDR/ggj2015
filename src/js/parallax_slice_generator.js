function ParallaxSliceGenerator(oSliceData)
{
	this.oSliceData = oSliceData;

	this.generate = function()
	{
		len=this.oSliceData.length;
		for(var i=0;i<len;i++)
		{
			slice = this.oSliceData[i];
			//console.log(slice);
			this.addSlice(slice);
		}

	}

	this.addSlice = function(slice)
	{
		$('<div/>',
					{"class":"layer","data-depth":slice.depth})
					.css(
							{								
									'background-image':"url("+slice.img_src+")",
									'background-repeat':'no-repeat',
									'left':slice.x+'px',
									'top':slice.y+'px',
									'position':'absolute',
									'width':'100%',
									'height':'100%',
									'z-index':slice.zIndex
							}
							
							
						)
					.appendTo($('#screen'));
	}
}