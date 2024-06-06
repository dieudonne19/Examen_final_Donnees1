module.exports =  (client, displayMenu, menus, askUser, checkUserResponse) => {

    const querySentence = `
        SELECT match.name AS match_name, 
            team_1.name AS team_1_name, 
            team_2.name AS team_2_name, 
            match.date,  match.hour, match.location, 
            match.stadium 
            FROM contain 
                INNER JOIN "match" ON match.id = contain.id_match 
                INNER JOIN team_1 ON contain.id_team_1 = team_1.id 
                INNER JOIN team_2 ON contain.id_team_2 = team_2.id
    `;

    client.query(querySentence)
        .then((match) => {
            console.table(match["rows"]);
        })
        .then(_=> {
           setTimeout(() => {
                displayMenu(menus);
                let userRes = askUser();
                checkUserResponse(userRes);
           }, 1000);
        })
};