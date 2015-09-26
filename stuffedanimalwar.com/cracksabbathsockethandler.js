/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/

//REQUIRE BASE SOCKET HANDLER JAVASCRIPT
$.getScript('sockethandler.js', function()
{
    endpoint = "cracksabbath";
    masterAlias = "DJ";
    unspecifiedAlias="TWEEKER";
    chatSocketEvent = endpoint+'chatmessage';
    tapSocketEvent = endpoint+'tapmessage';
    var baseMediaPath = "http://analogarchive.com/live/";

    var socket = io();
    initializeCommonVars(masterAlias,unspecifiedAlias);
    initializeChatSocketHandler(socket,chatSocketEvent);
    initializeTapSocketHandler(socket,tapSocketEvent);
});


