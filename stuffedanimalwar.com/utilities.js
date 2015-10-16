/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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

function getRandomColorValue(){
    return Math.floor((Math.random() * 255) + 1);
}

