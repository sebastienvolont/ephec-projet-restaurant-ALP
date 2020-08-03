"use strict";

let counter = 0;
let imgsGalerie = [];

window.onload = carouselImgGalerie;

function carouselImgGalerie() {


    imgsGalerie[0] = "img/galerie-photos/plat-presentation01.jpg";
    imgsGalerie[1] = "img/galerie-photos/chef-cuisine-interieur01.jpg";
    imgsGalerie[2] = "img/galerie-photos/plat-presentation02.jpg";
    imgsGalerie[3] = "img/galerie-photos/chef-cuisine-interieur02.jpg";
    imgsGalerie[4] = "img/galerie-photos/plat-presentation03.jpg";
    imgsGalerie[5] = "img/galerie-photos/plat-presentation04.jpg";
    imgsGalerie[6] = "img/galerie-photos/plat-presentation06.jpg";
    imgsGalerie[7] = "img/galerie-photos/decor-exterieur01.jpg";


    document.imagesGalerie.src = imgsGalerie[counter];


}


function ajouterPlusUn() {
  if(counter < imgsGalerie.length - 1) {
      counter ++;
      document.imagesGalerie.src = imgsGalerie[counter] ;
      console.log(counter);
  } else if (counter === imgsGalerie.length-1) {
      counter = -1;
  }


}

function moinsUn() {
    if (counter !== 0) {
        counter = counter - 1;
        document.imagesGalerie.src = imgsGalerie[counter];
        console.log(counter);
    } else if (counter === 0) {
        counter = imgsGalerie.length;
    }
}