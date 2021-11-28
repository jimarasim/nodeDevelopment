/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/
//REQUIRES STUFFED ANIMAL WAR MECHANICS FOR SOCKET HANDLER BASE

const socketIO = require('socket.io');
$.getScript('stuffedanimalwarmechanics.js', function()
{//REQUIRES UTILITIES FOR SOCKETHANDLER BASE
    $.getScript('utilities.js', function()
    {
        //REQUIRE BASE SOCKET HANDLER JAVASCRIPT
        $.getScript('sockethandler.js', function()
        {
            endpoint = "fromkittehwithlove";
            let masterAlias = "KITTEH";
            let unspecifiedAlias="MOUSE";
            chatSocketEvent = endpoint+'chatmessage';
            tapSocketEvent = endpoint+'tapmessage';
            const io = socketIO(server);
            initializeCommonVars(socket,masterAlias,unspecifiedAlias);
            initializeChatSocketHandler(socket,chatSocketEvent);
            initializeTapSocketHandler(socket,tapSocketEvent);
        });
    });
});




