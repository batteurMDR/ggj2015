function SplashScreen()
{
 	this.init=function()
 	{
		this.setBackground();
	 	this.setClouds();
 	}

 	this.setBackground=function()
	 {
	 	$('#screen').css(
	 							"background-image", "url(img/backgrounds/background0.png)"
	 						);
	 }

	 this.setClouds=function()
	 {
	 	var clouds = $('<div/>',{'id' : 'clouds'});
	 	var cloudscontainer = $('<div/>',{'id' : 'cloudscontainer'}).append(clouds);
	 	$('#screen').prepend(cloudscontainer);	
	 }
}