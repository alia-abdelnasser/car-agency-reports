const Vehicle = require('./Vehicle.js');

class Suv extends Vehicle {

    calculateRentalAmount(isLate = false, daysRented = 0, mileage = 0) {
        let rentalAmount = 50.0;
        rentalAmount += (150 * daysRented);
        if (mileage > daysRented * 70) {
            rentalAmount += (mileage - daysRented * 70) * 2;
        }
        if (mileage >= 200) {
            rentalAmount -= rentalAmount * 0.05;
        }
        if (isLate) {
            rentalAmount += rentalAmount * 0.03;
        }
        return rentalAmount;
    }

    accumulateRewardPoints(rewardPoints = 0, isLate = true, daysRented = 0) {
        if (!isLate) {
            rewardPoints++;
            if (daysRented > 5) {
                rewardPoints += daysRented - 5;
            }
        }
        return rewardPoints;
    }
}

module.exports = Suv;