/*jaemzware mixpage 20151203*/
//REQUIRES UTILITIES FOR SOCKETHANDLER BASE
$.getScript('utilities.js', function()
{
//REQUIRE BASE SOCKET HANDLER JAVASCRIPT
$.getScript('sockethandler.js', function()
{
    endpoint = "mixpage";
    masterAlias = "DJ";
    unspecifiedAlias="LURKER";
    chatSocketEvent = endpoint+'chatmessage';
    tapSocketEvent = endpoint+'tapmessage';
    connectSocketEvent = 'connectSocketEvent';
    disconnectSocketEvent = 'disconnectSocketEvent';

    var socket = io();
    initializeCommonVars(socket,masterAlias,unspecifiedAlias);
    initializeChatSocketHandler(socket,chatSocketEvent);
    initializeTapSocketHandler(socket,tapSocketEvent);
    initializeConnectSocketHandler(socket,connectSocketEvent);
    initializeDisconnectSocketHandler(socket,disconnectSocketEvent);
});
});



