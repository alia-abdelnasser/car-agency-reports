const Vehicle = require('./Vehicle.js');

class Sedan extends Vehicle {
    calculateRentalAmount(isLate = false, daysRented = 0, mileage = 0) {
        let rentalAmount = 50.0;
        rentalAmount += (100 * daysRented);
        if (mileage > daysRented * 50) {
            rentalAmount += (mileage - daysRented * 50) * 2;
        }
        if (isLate) {
            rentalAmount += rentalAmount * 0.03;
        }
        return rentalAmount;
    }
}

module.exports = Sedan;