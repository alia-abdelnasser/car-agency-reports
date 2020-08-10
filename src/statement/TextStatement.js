const Statement = require('./Statement');

class TextStatement extends Statement {
    buildStatement() {
        let jsonStatement = super.buildStatement();
        
        let text = `Rental Record for:${jsonStatement.customer.name}\n`;
        jsonStatement.rentals.forEach(item => {
            text += `\t"${item.vehicle}"\tLE ${item.rentalAmount.toFixed(2)}\n`;
        });
        text += `Amount owed is LE ${jsonStatement.totalAmount.toFixed(2)}\n`;
        text += `You earned: ${jsonStatement.rewardPoints} new Reward Points\n\n`;

        return text;
    }
}

module.exports = TextStatement;