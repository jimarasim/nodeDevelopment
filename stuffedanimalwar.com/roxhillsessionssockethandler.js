/* STUFFED ANIMAL WAR - jaemzware.org - 2015*/

//REQUIRE BASE SOCKET HANDLER JAVASCRIPT
$.getScript('sockethandler.js', function()
{
    var endpoint = "roxhillsessions";
    
    //SET AND INITIALIZE HANDLER SPECIFIC VARIABLES FOR THIS OVERRIDDEN HANDLER
    masterAlias = "DJ";
    unspecifiedAlias="LURKING POSER";
    chatSocketEvent = endpoint+'chatmessage';

    var socket = io();
    initializeCommonVars(masterAlias,unspecifiedAlias);
    initializeChatSocketHandler(socket,chatSocketEvent);
});


