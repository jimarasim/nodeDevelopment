/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/
//REQUIRES STUFFED ANIMAL WAR MECHANICS FOR SOCKET HANDLER BASE
$.getScript('stuffedanimalwarmechanics.js', function()
{
//REQUIRES UTILITIES FOR SOCKETHANDLER BASE
$.getScript('utilities.js', function()
{
//REQUIRE BASE SOCKET HANDLER JAVASCRIPT
$.getScript('sockethandler.js', function()
{
    endpoint = "lastgasp";
    masterAlias = "DJ";
    unspecifiedAlias="LURKER";
    chatSocketEvent = endpoint+'chatmessage';
    tapSocketEvent = endpoint+'tapmessage';

    var socket = io();
    initializeCommonVars(socket,masterAlias,unspecifiedAlias);
    initializeChatSocketHandler(socket,chatSocketEvent);
    initializeTapSocketHandler(socket,tapSocketEvent);
});
});
});


