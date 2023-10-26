const catchedAsync = require("../utils/catchedAsync");

module.exports = {
    listController: catchedAsync(require('./listController')),
}