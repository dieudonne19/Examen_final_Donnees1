
const { askUser, checkUserResponse } = require('./src/functions/user');
const { displayMenu, welcome } = require('./src/functions/menu');



welcome();
displayMenu();

let userRes = askUser();
checkUserResponse(userRes);
