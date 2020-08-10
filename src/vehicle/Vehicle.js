class Vehicle {

    constructor(makeAndModel) {
        this._makeAndModel = makeAndModel;
    }

    getMakeAndModel() {
        return this._makeAndModel;
    }

    calculateRentalAmount(isLate = false) {
        let rentalCost = 50.0;
        if (isLate) {
            rentalAmount += rentalAmount * 0.03;
        }
        return rentalCost;
    }

    accumulateRewardPoints(rewardPoints = 0, isLate = true) {
        if (!isLate) {
            rewardPoints++;
        }
        return rewardPoints;
    }
}

module.exports = Vehicle;