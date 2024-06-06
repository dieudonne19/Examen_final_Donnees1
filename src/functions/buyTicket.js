module.exports =  (client, displayMenu, askUser, checkUserResponse, object) => {


    const confirmCommand = `INSERT INTO command (id_client, id_ticket) VALUES 
    (${object.id_client}, '${object.id_ticket}');
    `;

    const confirmPayement = `INSERT INTO payement ("date", id_command) VALUES 
    (current_date, ${object.id_command});
    `
    const modifyTicketNumber = `UPDATE match SET ticket_number = ticket_number-1 WHERE match.id = '${object.match_id}';`

    

    client.query(confirmCommand)
        .then(_=> {
            client.query(confirmPayement)
            client.query(modifyTicketNumber)
        })
        .then(_=> {
            console.table({message: `Vous venez d'acheter un ticket!`})

            setTimeout(() => {
                displayMenu();
                let userRes = askUser();
                checkUserResponse(userRes);
            }, 1000);
        })
        .catch(_=> {
            console.table({message: `Impossible d'acheter le ticket! Réessayer plus-tard.`})
            setTimeout(() => {
                displayMenu();
                let userResponse = askUser();
                checkUserResponse(userResponse);
            }, 1000);
        })
};