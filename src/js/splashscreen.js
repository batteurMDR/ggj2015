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
		var $mainmenu = $('<div/>',{'id' : 'mainmenu','class':'animated wobble'});
	 	$('#screen').prepend($mainmenu);

	 	$('#mainmenu').html('<h1>Game Title</h1><h2 onclick="game.start();" class="animated pulse infinite" id="btn_start">Start</h2>');


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