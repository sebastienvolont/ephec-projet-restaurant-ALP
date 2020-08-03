"use strict";


let counter = 0;
let imgsRestau = [];


window.onload = carouselImg;


function carouselImg() {




    imgsRestau[0] = "img/restaurant-photos/interieur02.jpg";
    imgsRestau[1] = "img/restaurant-photos/interieur03.jpg";
    imgsRestau[2] = "img/restaurant-photos/interieur04.jpg";
    imgsRestau[3] = "img/restaurant-photos/interieur01.jpg";
    imgsRestau[4] = "img/restaurant-photos/exterieur01.jpg";



    document.defilementImages.src = imgsRestau[counter];

    if (counter < imgsRestau.length - 1) {
        counter++;

    } else if (counter === 4) {
        counter = 0;
    }

    setTimeout("carouselImg()", 1250)

}

