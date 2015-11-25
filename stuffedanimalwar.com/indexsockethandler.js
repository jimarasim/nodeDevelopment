/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/
//REQUIRES STUFFED ANIMAL WAR MECHANICS FOR SOCKET HANDLER BASE
$.getScript('stuffedanimalwarmechanics.js', function()
{
//REQUIRES UTILITIES FOR SOCKETHANDLER BASE
$.getScript('utilities.js', function()
{
//REQUIRES SOCKETHANDLER BASE
$.getScript('sockethandler.js', function()
{
    endpoint = "index";
    masterAlias = "DJ";
    unspecifiedAlias = 'LURKER';
    chatSocketEvent = endpoint+'chatmessage';
    tapSocketEvent = endpoint+'tapmessage';

    var socket = io();
    initializeCommonVars(masterAlias,unspecifiedAlias);
    initializeChatSocketHandler(socket);
    initializeTapSocketHandler(socket);
    initializeConnectSocketHandler(socket);
    initializeDisConnectSocketHandler(socket);
});
});
});


