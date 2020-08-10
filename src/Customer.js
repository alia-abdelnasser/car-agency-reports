const TextStatement = require('./statement/TextStatement.js');
const JsonStatement = require('./statement/JsonStatement.js');
const Statement = require('./statement/Statement.js');

class Customer {

    constructor(name, outputFormat = Statement.TEXT) {
        this._name = name;
        this._rentals = [];
        this._outputFormat = outputFormat;

        switch (outputFormat) {
            case Statement.JSON:
                this._statement = new JsonStatement(this);
                break;
            case Statement.TEXT:
                this._statement = new TextStatement(this);
                break;
        }
    }

    addRental(rental) {
        this._rentals.push(rental);
    }

    getName() {
        return this._name;
    }

    getRentals() {
        return this._rentals;
    }

    // if customer needs to change output format later
    setOutputFormat(outputFormat) {
        this._outputFormat = outputFormat;
    }

    getOutputFormat() {
        return this._outputFormat;
    }

    statement() {
        return this._statement.buildStatement();
    }
}

module.exports = Customer;