class Rental {

    constructor(vehicle, mileage, daysRented, lateFee) {
        this._vehicle = vehicle;
        this._mileage = mileage;
        this._daysRented = daysRented;
        this._lateFee = lateFee;
    }

    getMileage() {
        return this._mileage;
    }

    getVehicle() {
        return this._vehicle;
    }

    getDaysRented() {
        return this._daysRented;
    }

    isLate() {
        return this._lateFee;
    }

    getRentalAmount() {
        return this._vehicle.calculateRentalAmount(this._lateFee, this._daysRented, this._mileage);
    }

    accumulateRewardPoints(rewardPoints = 0) {
        return this._vehicle.accumulateRewardPoints(rewardPoints, this._lateFee, this._daysRented);
    }
}

module.exports = Rental