
/* UTILITY - GETRANDOMCOLORVALUE (COMMON)
 * this function returns a random color value, used by drawing new things
 */
function GetRandomColorValue(){
    return Math.floor((Math.random() * 255) + 1);
}

//AUDIO SPECIFIC UTILITIES
function PlayNextTrack(currentFile){
    //don't do anything if there are no tracks
    if($('#selectsongs option').length===0)
    {
        return;
    }

    //get the next track, if there isn't one, use the first one
    if($('#selectsongs option[value="'+currentFile+'"]').next().text().length!==0)
    {
        changeMp3($('#selectsongs option[value="'+currentFile+'"]').next().attr('value'));
    }
    else if($('#selectsongs option[value="'+currentFile+'"]').first().text().length!==0)
    {
        changeMp3($('#selectsongs option[value="'+currentFile+'"]').first().attr('value'));
    }
    else{
        console.log("SOMETHING WENT WRONG TRYING TO PLAY NEXT TRACK IN THE DROPDOWN");
    }
}
function changeMp3(mp3Url){
    //change the source of the AUDIO player
    $('#jaemzwaredynamicaudiosource').attr("src",mp3Url);
    document.getElementById("jaemzwaredynamicaudioplayer").load();
    document.getElementById("jaemzwaredynamicaudioplayer").play();
    $('#selectsongs').val(mp3Url);
}
function changeMp4(mp4Url){
    $('#jaemzwaredynamicvideosource').attr("src",mp4Url);
    document.getElementById("jaemzwaredynamicvideoplayer").load();
    document.getElementById("jaemzwaredynamicvideoplayer").play();
}

