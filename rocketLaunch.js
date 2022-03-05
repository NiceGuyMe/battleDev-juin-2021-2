const prompt = require('prompt-sync')();
let bouton = {}
let nombreDeBouton = 1
var newBouton = ""
// to add button in "bouton"
const addBouton = () => {
    while (true) {
        newBouton = prompt(" enter the name of a button: ");
        if (!bouton[newBouton]) {
            bouton[newBouton] = 1;
        } else
            bouton[newBouton]++;
        let choix = +prompt(" Do you want to enter the name of another button? (yes=1/no=2) ")
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
            console.log(`the total number of buttons is: ${nombreDeBouton}`);
            console.log("--------------------------------------------");
            console.log(`the button distribution is: `);
            console.log(bouton);
            console.log("--------------------------------------------");
            console.log(`the only button that comes back twice is :${newtab[i][0]}`);
            console.log("--------------------------------------------");
        }
    }
}
addBouton()
show()
