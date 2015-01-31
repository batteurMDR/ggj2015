    
function DragnDrop()
{
    this.init = function()
    {
        var pos;
        $('#draggable').draggable({
            start:function(){
                pos = $(this).closest('.btn').offset();
            },
            stop:function(){
                var frame = game.frameHandler.getCurrentTreeFrame($(this).offset().top);
                new Generator($(this).closest('.btn').data('titleBtn'), frame.id, $(this).offset().left);
                $(this).offset({top: pos.top + 5, left: pos.left + 5});
            }       
        });       
    }

    this.initDraggableGameObject =function(elem)
    {
         elem.draggable(
            {
                drag:function()
                    {
                        for(var i=0,len=game.gameObjectList.length;i<len;i++)
                        {
                            var oGameObject =game.gameObjectList[i];
                            elem = $(this);
                            if( elem.attr('id') == oGameObject.id)
                            {
                                oGameObject.animable=false;
                                oGameObject.x = elem.offset().left;
                                oGameObject.y = elem.offset().top;
                                break;
                            }
                        }
                    },
                stop :function()
                    {
                        for(var i=0,len=game.gameObjectList.length;i<len;i++)
                        {
                            var oGameObject =game.gameObjectList[i];
                            elem = $(this);
                            if( elem.attr('id') == oGameObject.id)
                            {
                                 oGameObject.x = elem.offset().left;
                                 oGameObject.y = elem.offset().top;
                                 oGameObject.animable=true;
                                 break;
                            }
                        }
                    }
            });
    }
}
