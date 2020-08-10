const Vehicle = require('./Vehicle.js');

class FourXFour extends Vehicle {
    calculateRentalAmount(isLate = false, daysRented = 0, mileage = 0) {
        let rentalAmount = 50.0;
        rentalAmount += (200 * daysRented);
        if (mileage >= 200 && daysRented > 10) {
            rentalAmount -= rentalAmount * 0.05;
        }
        if (isLate) {
            rentalAmount += rentalAmount * 0.03;
        }
        return rentalAmount;
    }

    accumulateRewardPoints(rewardPoints = 0, isLate = true) {
        if (!isLate) {
            rewardPoints++;
            rewardPoints *= 2;
        }
        return rewardPoints;
    }
}

module.exports = FourXFour;