module.exports =  (client, displayMenu, askUser, checkUserResponse) => {

    const querySentence = `
        SELECT id as id_command_important, id_client, id_ticket FROM command;`;

    client.query(querySentence)
        .then((commands) => {
            console.log(`Voici la liste des commandes pour info : \n`);
            console.table(commands["rows"]);
            console.log(`Voulez-vous acheter un ticket ? Veuillez suivre les instructions suivantes : \n
            - Prenez compte du dernier commande\n
            - Prenez compte de votre identifiant client\n
            - Prenez compte de l'identifiant du ticket à acheter (sinon voir ticket d'abord)\n
            - Visionner la liste des matchs\n
            --> Si ticket = 'tck1' alors match = 'm1' etc...`)
        })
        .then(_=> {
            setTimeout(() => {
                displayMenu();
                let userRes = askUser();
                checkUserResponse(userRes);
            }, 1000);
        })
};