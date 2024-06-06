module.exports =  (client, displayMenu, askUser, checkUserResponse, informations) => {

        if (informations == undefined || informations == null) {
            console.table({error_message: `Les champs sont des propriétés requises! Réessayer.`})
            displayMenu();
            let userResponse = askUser();
            checkUserResponse(userResponse);
        }

        else {
            const querySentence = `
            INSERT INTO client (first_name, last_name, email, "password") VALUES 
                ('${informations.first_name}', '${informations.last_name}', '${informations.email}', '${informations.password}')
            `;

            client.query(querySentence)
                .then(_ => {
                    console.table({ message: `Utilisateur enregistré avec succès!` });
                })
                .then(_=> {
                    displayMenu();
                    let userRes = askUser();
                    checkUserResponse(userRes);
                })
                .catch(_=> {
                    console.table({message: `Impossible de s'authentifier.`})
                    displayMenu();
                    let userResponse = askUser();
                    checkUserResponse(userResponse);
                })
        }
};
