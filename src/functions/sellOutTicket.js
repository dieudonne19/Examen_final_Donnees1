module.exports =  (client, displayMenu, askAdmin, checkUserResponse) => {

    const querySentence = `
    SELECT count(ticket.price) AS sold_ticket, ticket.id AS ticket_id, client.first_name, client.last_name 
    FROM payement 
    INNER JOIN command ON payement.id_command = command.id 
    INNER JOIN ticket ON ticket.id = command.id_ticket 
    INNER JOIN client ON command.id_client = client.id 
    WHERE payement.id_command IS NOT NULL 
    GROUP BY client.id, ticket.id;
    `;
    

    client.query(querySentence)
        .then((ticket) => {
            console.table(ticket["rows"]);
        })
        .then(_=> {
            setTimeout(() => {
                displayMenu();
                let adminRes = askAdmin();
                checkUserResponse(adminRes);
            }, 1000);
        })
        .catch(err => {
            console.table({error: `Impossible d'afficher la liste des tickets vendus!`, data: err })
        })
};