/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/
//REQUIRES UTILITIES FOR SOCKETHANDLER BASE
$.getScript('utilities.js', function()
{
//REQUIRES SOCKETHANDLER BASE
$.getScript('sockethandler.js', function()
{
    endpoint = "djnachos";
    masterAlias = "DJ";
    unspecifiedAlias = 'LURKER';
    chatSocketEvent = endpoint+'chatmessage';
    tapSocketEvent = endpoint+'tapmessage';

    var socket = io();
    initializeCommonVars(masterAlias,unspecifiedAlias);
    initializeChatSocketHandler(socket,chatSocketEvent);
    initializeTapSocketHandler(socket,tapSocketEvent);
});
});


