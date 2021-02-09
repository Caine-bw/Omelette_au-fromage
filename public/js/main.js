import {Personne, Ingredient, Panier} from "./class.js"


/** Créer une class Personne. Cette personne doit avoir des propriétés et des méthodes : 
* - nom(string)
* - lieu(string)
* - argent(number)
* - mainDroite(tableau)
* ( du coup main gauche(tableau))
* - seDeplacer(lieu)
* - payerArticle(article)
* - couper(ingredient, outil)
*/

// Créer un objet personne
let abdel = new Personne ('Abdel', 'Batcave', 35, [], []);

// Créer un lieu "maison"
let maison = {
    nom: 'maison',
    personnes: []
}

// Créer un outil
let couteau = {
    nom: 'katana',
    action: 'coupé'
}

// ingredient pour class ingredients

let oeufs = new Ingredient("oeufs", "entier", 0.50);
let percil = new Ingredient("percil", "entier", 0.50);
let oignon = new Ingredient("oignon", "entier", 0.50);
let poulet = new Ingredient("blanc de poulet", "entier", 4);
let epices = new Ingredient("épices", "moulu", 1);
let poivrons = new Ingredient("poivrons", "entier", 2.50);
let fromage = new Ingredient("Formage qui pue", "entier", 2);


// panier dans class paniers

let panier1 = new Panier();
let panier2 = new Panier();
let panier3 = new Panier();
let epicerie = {
    nom: "épicerie",
    personnes: [],
    paniers: [panier1, panier2, panier3],
    contenu: [oeufs, percil, oignon, poulet, epices, poivrons, fromage]
}


//creer une poele
let poele = {
    contenu: [],
    cuire() {
        setTimeout(() => {
            this.contenu[0].etat = 'cuite';
            console.log(`L'${this.contenu[0].nom} est ${this.contenu[0].etat}.`);
        }, 4000);
        
    }
}

//creer un bol

let bol = {
    contenu: [],
    melanger(nomMelange) {
        let newMelange = {
            nom: nomMelange,
            etat: 'cru'
        }
        this.contenu = [newMelange];
    }
}
/** Créer un objet personne */


/**
* Créer un lieu "maison" (un objet) avec comme propriété "nom: 'maison'" et "personnes = []" => qui sera un tableau de personnes présentes dans la maison :
*/

/**
* Créer un outil (couteau) pour découper les ingrédients achetés
* propriétés : nom et action.
* action a comme valeur l'état "coupé" (qui sera mis aux légumes lorsqu'ils seront coupés avec le méthode de "personne".)
*/

/**
 * Créer des produits (ingrédients) à mettre dans le magasin qui serviront à créer l'omelette (oignon, oeuf, epice, fromage, ...);
 * propriétés : nom, etats ( entier,coupé, moulu), prix
 */

// Créer un lieu "epicerie" qui a comme propriétés :
// nom, personnes = [], paniers (un tableau d'objets "panier" avec une propriété "type" égal à panier et le contenu du panier, égal à un tableau vide),
// Les "ingrédients" créés juste au dessus contenus dans un tableau.
/**
 * Créer un poele avec un tableau comme contenu. Et avec une méthode cuir() qui, après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
 */
// Créer un bol avec un tableau comme contenu
// ajouter une méthode melanger(nomMelange) qui va créer un nouvel objet "newMelange" avec comme nom la variable nomMelange passé en paramètre et avec 'pas cuit' en etat. cette méthode remplacera this.contenu par [l'obj newMelange]


// DEBUT DE L'OMELETTE
// Pour dire que le personnage est à la maison :
// Avec l'objet personnage, utiliser la method seDeplacer et de passer en paramètre l'objet maison
// Afficher un message tel que :
// console.log(personnage.nom + " est actuellement à la " + personnage.lieu);
setTimeout(() => {
    abdel.seDeplacer(maison);
    console.log(`${abdel.nom} est actuellement à la ${abdel.lieu}.`)
}, 2000);

// Pour aller à l'épicerie acheter les ingrédients pour l'omelette, je répète la première étape en changeant le parametre de la method seDeplacer par l'epicerie

setTimeout(() => {
    maison.personnes.shift();
    abdel.seDeplacer(epicerie);
    console.log(`${abdel.nom} va à l'épicerie`)
}, 3000);
// Mon personnage prend un des paniers dans l'épicerie (il récupère le panier dans les objets de l'épicerie et le met dans sa main droite.)
setTimeout(() => {
    abdel.mainDroite.push(epicerie.paniers.shift());
    console.log(`${abdel.nom} a pris un ${abdel.mainDroite[0].type}`)
}, 5000);


// Je créer une boucle qui va prendre chaque élément (ingrédient) du contenu de l'épicerie (1 à 1) et en faire une COPIE dans le panier du personnage
// Afficher un message à chaque ingrédient pris
setTimeout(() => {
    epicerie.contenu.forEach((element, index) => { 
        abdel.mainDroite[0].contenu[index] = element;
        console.log(`${abdel.nom} prend ${element.nom} et le met dans son panier`);              
    });
}, 7000);
// Payer chaque ingrédient récupéré dans le panier. Avec une boucle aussi, on va les passer 1 à 1 dans la fonction payerArticle()
setTimeout(() => {
    abdel.mainDroite[0].contenu.forEach((element) => {
    abdel.payerArticle(element);
});
    console.log(`Il reste ${abdel.argent} euros a ${abdel.nom}, il est tres riche.`);
},9000);



// rentrer à la maison (comme ça on pourra cuisiner)

setTimeout(() => {
    epicerie.personnes.shift()
    abdel.seDeplacer(maison);

    for(let i = 0 ; abdel.mainDroite[0].contenu[0] ; i++){
        console.log(`${abdel.nom} met ${abdel.mainDroite[0].contenu[0].nom} dans le bol`)
        bol.contenu.push(abdel.mainDroite[0].contenu.shift());
        i--;  
    }
}, 11000);

// // Retourner à l'épicerie pour rapporter le panier. (donc seDeplacer puis enlever le panier de la main droite et le remetre dans les paniers de l'épicerie.)

setTimeout(() => {
    maison.personnes.shift();
    abdel.seDeplacer(epicerie);
    epicerie.paniers.push(abdel.mainDroite.shift());
    console.log(`${abdel.nom} retourne à l'épicerie pour rendre le panier, par ce qu'il n'est pas un voleur`)
}, 13000);

// Retourner à la maison pour continuer l'omelette

setTimeout(() => {
    epicerie.personnes.shift();
    abdel.seDeplacer(maison);
    console.log(`${abdel.nom} retourne à la ${abdel.lieu} pour cuisiner`);
}, 15000);

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage

setTimeout(() => {
    bol.contenu.forEach(element => {
        if(element.etat == 'entier'){
            setTimeout(() => {
                abdel.couper(element, couteau);
                console.log(`${abdel.nom} coupe ${element.nom} avec le katana`);
            }, 1000); 
        }
    });
}, 17000);


// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).

// Afficher un message avec le nouveau mélange

setTimeout(() => {
    bol.melanger('omelette');
    console.log(`${abdel.nom} melange les ingredients. Il y a maintenant une ${bol.contenu[0].nom} dans le bol.`)
}, 20000);


// vider le contenu du bol dans la poele. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

setTimeout(() => {
    poele.contenu.push(bol.contenu.shift());
    console.log(`${abdel.nom} verse le contenu du bol dans la poêle et va maintenant mettre l'omelette a cuire`);
}, 22000);

setTimeout(() => {
   poele.cuire(); 
}, 25000);