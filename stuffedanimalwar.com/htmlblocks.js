function writeHtmlBlockAudioPlayer(){
    $.getJSON("audioplayer.json", function(json) {
            console.log(json.audio);
        });
}
