module.exports =  (client, displayMenu, menus, askUser, checkUserResponse) => {
    
    const querySentence = `
    SELECT ticket.id as Ticket, 
    ticket.price, 
    "match".ticket_number, 
    match.name AS Match, 
    team_1.name AS team_1, 
    team_2.name AS team_2 
    FROM ticket 
        INNER JOIN "match" ON ticket.id_match = match.id 
        INNER JOIN contain ON contain.id_match = match.id 
        INNER JOIN team_1 ON contain.id_team_1 = team_1.id 
        INNER JOIN team_2 ON contain.id_team_2 = team_2.id;`;

    client.query(querySentence)
        .then((ticket) => {
            if(ticket["rows"].length < 1) {
                console.table({
                    message: `La liste des tickets est encore indisponible!`
                });
            }
            else {
                console.table({message: `La liste de tous les tickets a été récupéré.`})
                console.table(ticket["rows"]);
            }
        })
        .then(_=> {
            setTimeout(() => {
                displayMenu(menus);
                let userRes = askUser();
                checkUserResponse(userRes);
            }, 1000);
        })
}