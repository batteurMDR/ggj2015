


var game =
{

	 init : function()
	 {
	 	toolbar.init();
	 }
}
var Generator = function(name){
    var number = 0;
    var classe = undefined;
    switch(name){
        case "birds":
            number = 5;
            classe = "Bird";
            break;
        case "tree":
            number = 4;
            classe = window["Tree"];
            break;
    }
    for(var i = 0; i < number; i++){
        //var fn = window[classe];
        var y = Math.round(Math.random() * (classe.maxY - classe.minY) + classe.minY);
        var x = Math.round(Math.random() * ($(window).width()));
        console.log(x);
        var item = new classe(x,y);
       item.add(); 
    }
}
$(function(){
	game.init();
});
