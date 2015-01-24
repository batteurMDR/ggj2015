


var game =
{

	 init : function()
	 {
	 	toolbar.init();
	 	this.setBackground();
	 	//this.setClouds();

	 	
	 },

	 setBackground : function()
	 {
	 	$('#screen').css(
	 							"background-image", "url(img/backgrounds/background0.png)"
	 						);
	 },

	 setClouds : function()
	 {
	 	var clouds = $('<div/>',{'id' : 'clouds'});
	 	var cloudscontainer = $('<div/>',{'id' : 'cloudscontainer'}).append(clouds);
	 	$('#screen').prepend(cloudscontainer);	
	 },


     addItem: function(item){
      //   alert(item.name)
       var $item = $('<div>').addClass(item.name).addClass('item');
       $item.offset({top: item.y - item.height, left: item.x}).width(item.width).height(item.height);

       $('#screen').append($item);
     }
}
var Generator = function(name){
    var number = 0;
    var classe = undefined;
    //alert(name);
    switch(name){
        case "birds":
            number = 5;
            classe = window["Bird"];
            break;
        case "tree":
            number = 4;
            classe = window["Tree"];
            break;
        case "clouds":
            number = 1;
            classe = window["Cloud"];
            //game.setClouds();
            break;
    }
    for(var i = 0; i < number; i++){
        //var fn = window[classe];
        var y = Math.round(Math.random() * (classe.maxY - classe.minY) + classe.minY);
        var x = Math.round(Math.random() * ($(window).width()));
        console.log(x);
        var item = new classe(x,y);
       game.addItem(item); 
    }
}
$(function(){
	game.init();
});
