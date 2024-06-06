module.exports =  (client, displayMenu, askAdmin, checkUserResponse) => {

    const querySentence = `SELECT *  FROM client;`;

    client.query(querySentence)
        .then((client) => {
            console.table(client["rows"]);
        })
        .then(_=> {
            setTimeout(() => {
                displayMenu();
                let adminRes = askAdmin();
                checkUserResponse(adminRes);
            }, 1000);
        })
};