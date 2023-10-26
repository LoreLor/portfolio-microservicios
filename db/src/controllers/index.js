const catchedAsync = require("../utils/catchedAsync");

module.exports = {
    listController: catchedAsync(require('./listController')),
    insertController: catchedAsync(require('./insertController')),
}