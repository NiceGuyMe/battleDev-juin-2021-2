const prompt = require('prompt-sync')();
let bouton = {}
let nombreDeBouton = 1
var newBouton = ""
// to add button in "bouton"
const addBouton = () => {
    while (true) {
        newBouton = prompt(" saisir le nom d'un bouton: ");
        if (!bouton[newBouton]) {
            bouton[newBouton] = 1;
        } else
            bouton[newBouton]++;
        let choix = +prompt(" voulez vous saisir le nom d'un autre bouton ? (oui=1/non=2) ")
        if (choix == 1) {
            nombreDeBouton += 1
        } else {
            break;
        }
    }
    return bouton;
};
//to display the result the button which comes up twice
const show = () => {
    //transform "bouton" into array
    let newtab = Object.entries(bouton);
    //a loop which traverses the table in search of the button which returns twice
    for (let i = 0; i < newtab.length; i++) {
        if (newtab[i][1] == 2) {
            console.log("--------------------------------------------");
            console.log(`le nombre total de bouton est : ${nombreDeBouton}`);
            console.log("--------------------------------------------");
            console.log(`la repartition des bouton est : `);
            console.log(bouton);
            console.log("--------------------------------------------");
            console.log(`le seule bouton qui revient deux fois est :${newtab[i][0]}`);
            console.log("--------------------------------------------");
        }
    }
}
addBouton()
show()