class Statement {

    constructor(customer) {
        this._customer = customer;
    }

    buildStatement() {
        let rentals = this._customer.getRentals();

        let totalAmount = 0;
        let totalReward = 0;
        
        let statement = {
            customer: {
                name: this._customer.getName()
            },
            rentals: [],
            totalAmount: 0,
            rewardPoints: 0
        };

        rentals.forEach(rental => {
            let rentalAmount = rental.getRentalAmount();

            statement.rentals.push({
                vehicle: rental.getVehicle().getMakeAndModel(),
                rentalAmount: rentalAmount
            });

            totalAmount += rentalAmount;
            totalReward = rental.accumulateRewardPoints(totalReward);
        });

        statement.totalAmount = totalAmount;
        statement.rewardPoints = totalReward;

        return statement;
    }

    static get JSON() { return _JSON; }
    static get TEXT() { return _TEXT; }
}

const _JSON = 1;
const _TEXT = 2;

module.exports = Statement;