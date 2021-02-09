export {Personne, Ingredient, Panier}

// Créer une class Personne.
class Personne {
    constructor(nom, lieu, argent, mainDroite, mainGauche) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = mainDroite;
        this.mainGauche = mainGauche;
        this.seDeplacer = lieu => {
            lieu.personnes.push(this);
            this.lieu = lieu.nom;
        }
        this.payerArticle = article => {
            this.argent -= article.prix;
        }
        this.couper = (ingredient, outil) => {
            ingredient.etat = outil.action;
        }
    }
}

// creer class  produits ingredients

class Ingredient {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    }
}

//creer class panier

class Panier {
    constructor() {
        this.type = 'panier';
        this.contenu = [];
    }
}

