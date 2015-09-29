/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/
//REQUIRE BASE SOCKET HANDLER JAVASCRIPT
$.getScript('sockethandler.js', function()
{
    endpoint = "bigbusiness";
    masterAlias = "JARED";
    unspecifiedAlias="THE MAN";
    chatSocketEvent = endpoint+'chatmessage';
    tapSocketEvent = endpoint+'tapmessage';

    initializeCommonVars(masterAlias,unspecifiedAlias);
    initializeChatSocketHandler(socket,chatSocketEvent);
    initializeTapSocketHandler(socket,tapSocketEvent);
    var socket = io();

});