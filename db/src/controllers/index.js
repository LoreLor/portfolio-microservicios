const { catchedAsync } = require("../utils");

module.exports = {
    listController: catchedAsync(require('./listController')),
    insertController: catchedAsync(require('./insertController')),
    getByIdController: catchedAsync(require('./getByIdController')),
    updateController: catchedAsync(require('./updateController')),
    deleteController: catchedAsync(require('./deleteController')),
    signinController: catchedAsync(require('./signinController')),
}