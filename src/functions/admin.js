
const prompt = require('prompt-sync')();


function displaySousMenu() {
    console.log(``);
    console.log(`\nVoici le menu :\n`);
    console.log("\t====================================");
    console.log("\t||             ADMIN              ||");
    console.log("\t||                                ||");
    console.log("\t||     0. Total des ventes        ||");
    console.log("\t||     1. Les tickets vendus      ||");
    console.log("\t||     2. Bénéfice                ||");
    console.log("\t||     3. Liste des clients       ||");
    console.log("\t||     4. Menu principal          ||");
    console.log("\t||                                ||");
    console.log("\t====================================");
    console.log("\n");
    console.log("!Notice --> La valeur VIDE est traité en tant que 0 dans les menus\n");
}




function checkAdminResponse(adminRes, client, displayMenu, checkUserResponse) {
    switch (adminRes) {
        case 0:
            console.log(`\nVoici la somme totale des ventes : `);
            require('./displayTotal')(client, displayMenu, askAdmin, checkUserResponse)
            break;
        
        case 1:
            console.log(`\nVoici le nombre de tickets vendus : `);
            require('./sellOutTicket')(client, displayMenu, askAdmin, checkUserResponse);
            break;
        
        case 2:
            console.log(`\nVoici la bénéfice : `);
            require('./calculateBenefit')(client, displayMenu, askAdmin, checkUserResponse)
            break;

        case 3:
            console.log(`\nVoici la liste de tous les clients :`);
            require('./findAllClients')(client, displayMenu, askAdmin, checkUserResponse);
            break;

        case 4:
            displayMenu()
            adminRes = askAdmin();
            checkUserResponse(adminRes);
            break;

        default:
            console.log(`\nVous êtes redirigé vers la sortie à cause d'une mauvaise commande! Réessayer plus-tard.`);
            client.end();
            break;
    }
}

function askAdmin () {
    return +prompt(`Veuillez entrer le chiffre correspondant --> `) 
}


module.exports = {
    checkAdminResponse, askAdmin, displaySousMenu
}
