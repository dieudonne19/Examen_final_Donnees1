const { client } = require('../pg');
const { checkAdminResponse, askAdmin, displaySousMenu } = require('./admin');
const { displayMenu, menus } = require('./menu');

const prompt = require('prompt-sync')();



client.connect();



function checkUserResponse(userRes) {
    switch (userRes) {
        case 0:
            console.log(`\nBienvenue dans la page de Registration`);
            let informations = askInformation();
            require('./login')(client, displayMenu, askUser, checkUserResponse, informations);
            break;
        
        case 1:
            console.log(`\nVoici la liste de tous les tickets :`);
            require('./findAllTickets')(client, displayMenu, menus, askUser, checkUserResponse);
            break;

        case 2:
            console.log(`\nAcheter votre ticket!`);
            let object = askClient();
            require('./buyTicket')(client, displayMenu, askUser, checkUserResponse, object);
            break;

        case 3:
            console.log(`\nVoici la liste des matches :`);
            require('./findAllMatches')(client, displayMenu, menus, askUser, checkUserResponse);
            break;

        case 4:
            console.log(``);
            const team = askTeam()+"";
            // console.log(team);
            require('./findTeam')(client, displayMenu, menus, askUser, checkUserResponse, team)
            break;

        case 5:
            console.log(`\nBienvenue dans l'espace ADMINISTRATEUR!`);
            displaySousMenu();
            let adminResponse = askAdmin();
            checkAdminResponse(adminResponse, client, displayMenu, checkUserResponse)
            break;

        case 6:
            console.log(`\nBesoin d'aide ?`);
            require('./showHelp')(client, displayMenu, askUser, checkUserResponse);
            break;

        case 7:
            console.table({SEE_YOU: `Vous avez quitté le plateform!`});
            client.end();
            break;
        
        default:
            console.table({message : `Vous êtes redirigé vers le menu principal à cause d'une mauvaise commande!`});
            displayMenu();
            let newUserRes = askUser();
            checkUserResponse(newUserRes);
            break;
    }
}





// Ask client informations
function askInformation() {
    let first_name = prompt(`Entrer votre nom : `)
    let last_name = prompt(`Entrer votre prénom : `)
    let email = prompt(`Entrer votre e-mail : `)
    let password = prompt(`Entrer votre mot de passe : `)

    if (first_name == '' || last_name == '' || email == '' || password == '') {
        return undefined
    }

    return { first_name, last_name, email, password };
}


// fonction manontany anle client le ticket ho vidiny
function askClient() {
    let id_client = +prompt(`Entrer votre identifiant client : `);
    let id_ticket = prompt(`Entrer l'identifiant du ticket : `);
    let id_command = +prompt(`Entrer l'identifiant de la commande : `);
    let match_id = prompt(`Entrer l'identifiant du match : `);

    return {id_client, id_ticket, id_command, match_id};
}

// Demander l'utilisateur de choisir les options dans le menu
function askUser() {
    return +prompt(`Veuillez entrer le chiffre correspondant --> `);
}



function askTeam() {
    let team = prompt(`Entrer le nom de l'equipe --> `)
    return toUpperCaseFirstLetter(team);
}


/**
 * Transform the first letter into UpperCase
 * @param {string} noun 
 * @returns {string}
 */
function toUpperCaseFirstLetter(noun) {
    return noun.replace(noun[0], noun[0].toUpperCase());
}

module.exports = {
    askUser, checkUserResponse
}