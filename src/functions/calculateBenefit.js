module.exports =  (client, displayMenu, askAdmin, checkUserResponse) => {


    const querySentence = `SELECT sum((ticket.price*20)/100) AS benefit FROM payement 
    INNER JOIN command ON payement.id_command = command.id 
    INNER JOIN ticket ON ticket.id = command.id_ticket 
    INNER JOIN client ON command.id_client = client.id 
    WHERE payement.id_command IS NOT NULL 
    GROUP BY client.id;`;

    client.query(querySentence)
        .then((total) => {
            console.table({message: `Le bénéfice représente 20% du prix de chaque ticket.`})
            console.table(total["rows"]);
        })
        .then(_=> {
            setTimeout(() => {
                displayMenu();
                let adminRes = askAdmin();
                checkUserResponse(adminRes);
            }, 1000);
        })
};