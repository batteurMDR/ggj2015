function SplashScreen()
{
 	this.init=function()
 	{
		this.setBackground();
	 	this.setClouds();
	 	this.displayMenu();
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

	 this.displayMenu=function()
	 {
		var $mainmenu = $('<div/>',{'id' : 'mainmenu'});
	 	$('#screen').prepend($mainmenu);

	 	$('#mainmenu').html('<h2 onclick="game.start();">Click to begin</h2>');


	 }

	 this.hide=function()
	 {
	 	$('#mainmenu').hide();
	 }

	 this.show=function()
	 {
	 	$('#mainmenu').show();
	 }
}