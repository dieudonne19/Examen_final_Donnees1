module.exports =  (client, displayMenu, askAdmin, checkUserResponse) => {

    // CREATE VIEW total_per_client AS SELECT sum(ticket.price) AS total FROM payement 
    //     INNER JOIN command ON payement.id_command = command.id 
    //     INNER JOIN ticket ON ticket.id = command.id_ticket 
    //     INNER JOIN client ON command.id_client = client.id 
    //     WHERE payement.id_command IS NOT NULL 
    //     GROUP BY client.id;

    const querySentence = `SELECT sum(total) AS TOTAL_SALE FROM total_per_client;`;

    client.query(querySentence)
        .then((total) => {
            console.table(total["rows"]);
        })
        .then(_=> {
            setTimeout(() => {
                displayMenu();
                let userRes = askAdmin();
                checkUserResponse(userRes);
            }, 1000);
        })
};