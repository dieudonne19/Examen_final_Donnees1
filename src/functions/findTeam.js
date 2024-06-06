module.exports =  (client, displayMenu, menus, askUser, checkUserResponse, team) => {
    client.query(`
    SELECT 
        team_1.name AS votre_equipe, 
        team_2.name AS equipe_adverse,
        match.name AS match_name, 
        match.location, 
        match.stadium, 
        match.date,
        match.hour 
        FROM team_1 
        INNER JOIN contain ON team_1.id = contain.id_team_1 
        INNER JOIN match ON match.id = contain.id_match 
        INNER JOIN team_2 ON contain.id_team_2 = team_2.id
            WHERE team_1.name LIKE '%${team}%' 
        UNION 
    SELECT 
        team_2.name as votre_equipe,
        team_1.name AS equipe_adverse, 
        match.name as match_name, 
        match.location, 
        match.stadium, 
        match.date, 
        match.hour FROM team_2 INNER JOIN contain ON team_2.id = contain.id_team_2 
        INNER JOIN match ON match.id = contain.id_match 
        INNER JOIN team_1 ON contain.id_team_1 = team_1.id
            WHERE team_2.name LIKE '%${team}%';`)
        .then((teams) => {
            if (teams["rows"] < 1) {
                console.table({message: `Votre equipe est introuvable. Réessayer plus-tard!`})
            }

            else {
                console.table({message: `Votre equipe a bien été trouvé.`})
                console.table(teams["rows"]);
            }
        })
        .then(_=> {
            setTimeout(() => {
                displayMenu(menus);
                let userRes = askUser();
                checkUserResponse(userRes);
            }, 1000);
        })
};