/* 
 * GENERAL UTILITIES
 */
function RectContainsPoint(rectx, recty, height, width, pointx, pointy){
    //if the point is inside the rectangle
    //rectx, recty ----------------------
    //|                                 |length
    //-----------------width------------------
    //return true
    if(     pointx >= rectx && pointx <= (rectx+width) &&
            pointy >= recty && pointy <= (recty+height)){
        return true;
    }
    else{
        return false;
    }
}
/* UTILITY - GETRANDOMCOLORVALUE (COMMON)
 * this function returns a random color value, used by drawing new things
 */
function getRandomColorValue(){
    return Math.floor((Math.random() * 255) + 1);
}

