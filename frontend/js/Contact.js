"use strict";

//Tableau d'objet représentant les horaires du restaurant selon le jour de la semaine.
let horaires = [

    {jourSemaine : "Lundi", heures:"12h00 - 21h30"},
    {jourSemaine : "Mardi", heures:"Fermé"},
    {jourSemaine : "Mercredi", heures:"17h00 - 23h00"},
    {jourSemaine : "Jeudi", heures:"12h30 - 22h00"},
    {jourSemaine : "Vendredi", heures:"13h00 - 22h30"},
    {jourSemaine : "Samedi", heures:"11h45 - 22h15"},
    {jourSemaine : "Dimanche", heures:"17h00 - 23h00"}

    ];


function addHoraires() {

    for (let i in horaires) {
        let horairesRestaurant = document.getElementById("hRestaurant");
        horairesRestaurant.innerHTML += "<li id='liHoraires'>" + horaires[i].jourSemaine + " : " +  horaires[i].heures + "</li>";
    }

}

