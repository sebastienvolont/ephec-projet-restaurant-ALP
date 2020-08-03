"use strict";

//Tableau d'objets représentant la carte du restaurant
let menus = [
    {plat : 'Maki', prix : 6.25, pcs : 6, typePlat : "plat froid ", description : "Riz japonais, vinaigre de riz, concombre, avocats, saumon frais, feuilles de nori, sésames et du persil haché."},
    {plat : 'Sashimi', prix : 5.50, pcs : 4, typePlat : "plat froid", description : "Filets de saumon, thon, daurade, pâte de wasabi, feuilles de shiso et de la sauce soja."},
    {plat : 'HosoMaki', prix : 5.00, pcs : 8, typePlat : "plat froid", description : "Riz japonais, feuille de nori et des concombre."},
    {plat : 'OshiSushi', prix : 6.75, pcs : 8, typePlat : "plat froid", description : "Riz japonais, saké, citrons, oignon, crevettes, saumon fumé, avocat et des capres."},
    {plat : 'GunkanMaki', prix : 6.00, pcs : 6, typePlat : "plat froid", description : "Saumon, Thon frais, feuilles de ciboule, algues nori grillées, Wasabi et des feuilles de shiso."},
    {plat : 'FutoMaki', prix : 7.25, pcs : 10, typePlat : "plat froid", description : "Crevette cuites, concombre, bâtons de surimi, graines de sésame grillées et du gingembre mariné."},
    {plat : 'TemakiSushi', prix : 12.00, pcs : 10, typePlat : "plat froid", description : "Citron vert, saumon, soja, huile de sésame, graines de sésame et du wasabi."},
    {plat : 'CaliforniaRolls', prix : 11.50, pcs : 12, typePlat : "plat froid", description : "Saumon cru, feuilles de nori, avocat, graines de sésame, wasabi et de la sauce soja."},
    {plat : 'Ramens', prix : 14, pcs : 1, typePlat : "plat chaud", description : "Boeuf, chou chinois, échalote, oignon, harissa, soja, oeufs et du gingembre."},
    {plat : 'Gyozas', prix : 6.50, pcs : 6, typePlat : "plat chaud", description : "Viande porc hachée, crevettes, ciboules, huile de colza et du sésame."},
    {plat : 'Nouilles', prix : 12.25, pcs : 1, typePlat : "plat chaud", description : "Escalopes de poulet, carottes, poireau, échalotes, ail, wasabi, cibouletteet des brocolis."},
    {plat : 'Yakitori', prix : 13.50, pcs : 1, typePlat : "plat chaud", description : "Oeufs, cuisses de poulet, gingembre, ail, soja et du saké."},
    {plat : 'Donburi', prix : 11.75, pcs : 1, typePlat : "plat chaud", description : "Blancs de poulet, oeufs, ciboule, persil, jus de citron et des oignons."},
    {plat : 'KaréRaisu', prix : 9.50, pcs : 1, typePlat : "plat chaud", description : "Viande de boeuf, oignons, pommes de terres, carottes et de la poudre de curry."},
];

let total = 0;
let addition = [];

function getId(id) {
    return document.getElementById(id);
}

function trierCroissantPlat(x,y) {
    if(x.plat < y.plat) {return -1}
    if(x.plat > y.plat) {return 1}
    else { return 0}
}



function init() {
    menus.sort(trierCroissantPlat);
    makePlats(menus);

}


function index(nomPlat) {
    for(let i = 0; i < addition.length; i++) {
        if (addition[i].nomPlat === nomPlat) {
            return i;
        }
    }
    return -1;

}



function makePlats(elem) {

    getId("platsCartes").innerHTML = "";

    for(let i in elem) {
        let platid = elem[i].plat;
        let prixid = elem[i].prix;
        let nbrPieces = elem[i].pcs;


        getId("platsCartes").innerHTML += "<section id="+ i + ">" +
            "<h1>" + elem[i].plat + "</h1>" +
            "<label for='nbrPersonnes'> Nombre de Personnes : </label>" +
            "<input type='number' id=" + elem[i].plat + " value= 1 step=1 max=10>" +
            "<button value='-' id='ajouterP' onclick='retirerPlat(`" + platid + "`)'> - </button>" +
            "<button value='+' id='retirerP' onclick='ajouterPlat(`"+ platid + "`,`" + prixid + "`, `" + nbrPieces+ "`)'> + </button>" +
            "<img src='img/plats-restaurant/" + elem[i].plat + ".jpg'>" +
            "<h2>" + elem[i].prix + " € </h2>" +
            "<h2>" +  elem[i].pcs + " pièces </h2>" +
            "<div id='affichageInfos'> <b> Compositions : </b> <br>" +  elem[i].description +  "</div>" +
            "</section>";


    }
}

function filtrePlat() {


    switch (getId("typePlatfilter").value) {

        case "Tous les plats" :
            makePlats(menus);
            break;

        case "Plats froids" :
            let platsFroids = menus.filter(function (x) {
                return (x.typePlat === "plat froid");
            });
            makePlats(platsFroids);
            break;

        case "Plats chauds" :
            let platsChauds = menus.filter(function (x) {
                return (x.typePlat === "plat chaud");
            });
            makePlats(platsChauds);
            break;

    }
}


/**
 * Fonction permettant de créer l'objet "platChoisi" comportant l'article choisi par un utilisateur en vérifiant si celui-ci n'a pas déjà été sélectionné grâce à la fonction "index()"
 * et l'ajoutant ainsi ensuite dans le tableau "addition" reprenant la totalité des plats commandés pour une/ou plusieurs personnes.
 *
 * @param {string} plat --- Plat proposé dans la carte du restaurant
 * @param {number} prix --- Prix associé à un plat donné de la carte
 * @param {number} pcs --- Le nombre de pièces d'un plat donné de la carte
 *
 */

function ajouterPlat(plat, prix, pcs){
    let nPlat = plat;
    let pPlat = prix;
    let pcsPlat = pcs;

    let nbP = +getId(nPlat).value;
    let ind = index(nPlat);

    if(ind === -1) {
        let platChoisi = {nomPlat: nPlat, prixPlat : pPlat, nbrPieces : pcsPlat, nbrPersonnes : nbP};
        addition.push(platChoisi);

    } else {
        addition[ind].nbrPersonnes += Number(nbP);
    }

    total = total + (pPlat * nbP);

getId("prixT").innerHTML = total.toFixed(2) + "€";
    afficherTable();

}


function afficherTable() {

    let menusClient = document.getElementById("platsClientTable");

    menusClient.innerHTML = "";



    for (let i in addition) {
        menusClient.innerHTML += "<tr>" +
            "<td id='contentG'>" + addition[i].nbrPersonnes + "x" + "</td>" +
            "<td id='contentG'>" + addition[i].nomPlat + "</td>" +
            "<td id='contentG'>" + addition[i].nbrPieces + "</td>" +
            "<td id='contentD'>" + (addition[i].prixPlat * addition[i].nbrPersonnes).toFixed(2) + "€" + "</td>" +
            "</tr>" ;


    }
}

function retirerPlat(plat) {
    let nPlat = plat;
    let ind = index(nPlat);

    if(ind !== -1) {
        total = total - (addition[ind].prixPlat * addition[ind].nbrPersonnes);
        getId("prixT").innerHTML = total;
        addition.splice(ind, 1);
        afficherTable();
    }
}


