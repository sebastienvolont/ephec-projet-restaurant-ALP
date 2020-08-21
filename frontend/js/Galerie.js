"use strict";

let compteur = 0;
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


    document.imagesGalerie.src = imgsGalerie[compteur];


}


function ajouterPlusUn() {
  if(compteur < imgsGalerie.length - 1) {
      compteur++;
      document.imagesGalerie.src = imgsGalerie[compteur] ;
      console.log(compteur);
  } else if (compteur === imgsGalerie.length-1) {
      compteur = -1;
  }


}

function moinsUn() {
    if (compteur !== 0) {
        compteur = compteur - 1;
        document.imagesGalerie.src = imgsGalerie[compteur];
        console.log(compteur);
    } else if (compteur === 0) {
        compteur = imgsGalerie.length;
    }
}