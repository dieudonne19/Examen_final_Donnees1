// const menus = [
//     'Sign up',
//     'Voir tous les tickets',
//     'Acheter tickets',
//     'Voir la liste des matches',
//     'Rechercher equipe',
//     'Admin',
//     'Quitter \n'
// ];

const bienvenue = [
    `\n\t ____WELCOME IN THIS TICKETBALLS____\n
\n\t____T_I_C_K_E_T_S__O_F__B_A_L_L_S____`
];

function welcome() {
    bienvenue.forEach(item => console.log(item))
}

function displayMenu() {
    console.log(`\nVoici le menu :\n`);

    console.log("\t=========================================");
    console.log("\t||                                     ||");
    console.log("\t||     0. SIGN UP                      ||");
    console.log("\t||     1. Voir les tickets             ||");
    console.log("\t||     2. Acheter tickets              ||");
    console.log("\t||     3. Voir la liste des matchs     ||");
    console.log("\t||     4. Rechercher équipe            ||");
    console.log("\t||     5. Admin                        ||");
    console.log("\t||     6. Aide (achat ticket)          ||");
    console.log("\t||     7. Quitter                      ||");
    console.log("\t||                                     ||");
    console.log("\t========================================");
    console.log("\n");
    console.log("!Notice --> La valeur VIDE est traité en tant que 0 dans les menus\n");
}



module.exports = {
    displayMenu, welcome
}