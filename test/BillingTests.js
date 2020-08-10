const assert = require('chai').assert;
const Suv = require('../src/vehicle/Suv.js');
const FourXFour = require('../src/vehicle/Fourxfour.js');
const Sedan = require('../src/vehicle/Sedan.js');
const Rental = require('../src/Rental.js');
const Customer = require('../src/Customer.js');
const Statement = require('../src/statement/Statement.js');

describe('Create new Sedan Vehicle Blue Honda 2008', () => {
  let blueHonda = new Sedan('Blue Honda 2008');
  it('MakeAndModel should match Blue Honda 2008', () => {
    assert.equal(blueHonda.getMakeAndModel(), 'Blue Honda 2008');
  });

  it('calculateRentalAmount should return 50', () => {
    assert.equal(blueHonda.calculateRentalAmount(), 50);
  });

  it('accumulateRewardPoints should return 0', () => {
    assert.equal(blueHonda.accumulateRewardPoints(), 0);
  });
});

describe('Create new Suv Vehicle Blue X3 2017', () => {
  let BlueBMW = new Suv('Blue X3 2017');
  it('MakeAndModel should match Blue X3 2017', () => {
    assert.equal(BlueBMW.getMakeAndModel(), 'Blue X3 2017');
  });

  it('calculateRentalAmount should return 50', () => {
    assert.equal(BlueBMW.calculateRentalAmount(), 50);
  });

  it('accumulateRewardPoints should return 0', () => {
    assert.equal(BlueBMW.accumulateRewardPoints(), 0);
  });
});

describe('Create new FourXFour Vehicle Grey Jeep 2013', () => {
  let greyJeep = new FourXFour('Grey Jeep 2013');
  it('MakeAndModel should match Grey Jeep 2013', () => {
    assert.equal(greyJeep.getMakeAndModel(), 'Grey Jeep 2013');
  });

  it('calculateRentalAmount should return 50', () => {
    assert.equal(greyJeep.calculateRentalAmount(), 50);
  });

  it('accumulateRewardPoints should return 0', () => {
    assert.equal(greyJeep.accumulateRewardPoints(), 0);
  });
});

describe('Create new Rental for Sedan Honda, 431, 4, false should', () => {
  let blueHonda = new Sedan('Blue Honda 2008');
  let hondaRental = new Rental(blueHonda, 431, 4, false);
  it('Mileage should match 431', () => {
    assert.equal(hondaRental.getMileage(), 431);
  });

  it('DaysRented should match 4', () => {
    assert.equal(hondaRental.getDaysRented(), 4);
  });

  it('isLate should match false', () => {
    assert.equal(hondaRental.isLate(), false);
  });

  it('getRentalAmount should return 912', () => {
    assert.equal(hondaRental.getRentalAmount(), 912);
  });

  it('accumulateRewardPoints should return 1', () => {
    assert.equal(hondaRental.accumulateRewardPoints(), 1);
  });
});

describe('Create new Rental for Sedan Honda, 70, 1, true should', () => {
  let blueHonda = new Sedan('Blue Honda 2008');
  let hondaRental = new Rental(blueHonda, 70, 1, true);
  it('Mileage should match 70', () => {
    assert.equal(hondaRental.getMileage(), 70);
  });

  it('DaysRented should match 1', () => {
    assert.equal(hondaRental.getDaysRented(), 1);
  });

  it('isLate should match true', () => {
    assert.equal(hondaRental.isLate(), true);
  });

  it('getRentalAmount should return 195.7', () => {
    assert.equal(hondaRental.getRentalAmount(), 195.7);
  });

  it('accumulateRewardPoints should return 0', () => {
    assert.equal(hondaRental.accumulateRewardPoints(), 0);
  });
});

describe('Create new Rental for Suv BMW, 431, 4, false should', () => {
  let BlueBMW = new Suv('Blue X3 2017');
  let bmwRental = new Rental(BlueBMW, 431, 4, false);
  it('Mileage should match 431', () => {
    assert.equal(bmwRental.getMileage(), 431);
  });

  it('DaysRented should match 4', () => {
    assert.equal(bmwRental.getDaysRented(), 4);
  });

  it('isLate should match false', () => {
    assert.equal(bmwRental.isLate(), false);
  });

  it('getRentalAmount should return 904.4', () => {
    assert.equal(bmwRental.getRentalAmount(), 904.4);
  });

  it('accumulateRewardPoints should return 1', () => {
    assert.equal(bmwRental.accumulateRewardPoints(), 1);
  });
});

describe('Create new Rental for Suv BMW, 70, 1, true should', () => {
  let BlueBMW = new Suv('Blue X3 2017');
  let bmwRental = new Rental(BlueBMW, 70, 1, true);
  it('Mileage should match 70', () => {
    assert.equal(bmwRental.getMileage(), 70);
  });

  it('DaysRented should match 1', () => {
    assert.equal(bmwRental.getDaysRented(), 1);
  });

  it('isLate should match true', () => {
    assert.equal(bmwRental.isLate(), true);
  });

  it('getRentalAmount should return 206', () => {
    assert.equal(bmwRental.getRentalAmount(), 206);
  });

  it('accumulateRewardPoints should return 0', () => {
    assert.equal(bmwRental.accumulateRewardPoints(), 0);
  });
});

describe('Create new Rental for Suv BMW, 70, 7, false should', () => {
  let BlueBMW = new Suv('Blue X3 2017');
  let bmwRental = new Rental(BlueBMW, 70, 7, false);
  it('Mileage should match 70', () => {
    assert.equal(bmwRental.getMileage(), 70);
  });

  it('DaysRented should match 7', () => {
    assert.equal(bmwRental.getDaysRented(), 7);
  });

  it('isLate should match false', () => {
    assert.equal(bmwRental.isLate(), false);
  });

  it('getRentalAmount should return 1100', () => {
    assert.equal(bmwRental.getRentalAmount(), 1100);
  });

  it('accumulateRewardPoints should return 3', () => {
    assert.equal(bmwRental.accumulateRewardPoints(), 3);
  });
});

describe('Create new Rental for FourXFour Jeep, 431, 4, false should', () => {
  let greyJeep = new FourXFour('Grey Jeep 2013');
  let jeepRental = new Rental(greyJeep, 431, 4, false);
  it('Mileage should match 431', () => {
    assert.equal(jeepRental.getMileage(), 431);
  });

  it('DaysRented should match 4', () => {
    assert.equal(jeepRental.getDaysRented(), 4);
  });

  it('isLate should match false', () => {
    assert.equal(jeepRental.isLate(), false);
  });

  it('getRentalAmount should return 850', () => {
    assert.equal(jeepRental.getRentalAmount(), 850);
  });

  it('accumulateRewardPoints should return 2', () => {
    assert.equal(jeepRental.accumulateRewardPoints(), 2);
  });
});

describe('Create new Rental for FourXFour Jeep, 70, 1, true should', () => {
  let greyJeep = new FourXFour('Grey Jeep 2013');
  let jeepRental = new Rental(greyJeep, 70, 1, true);
  it('Mileage should match 70', () => {
    assert.equal(jeepRental.getMileage(), 70);
  });

  it('DaysRented should match 1', () => {
    assert.equal(jeepRental.getDaysRented(), 1);
  });

  it('isLate should match true', () => {
    assert.equal(jeepRental.isLate(), true);
  });

  it('getRentalAmount should return 257.5', () => {
    assert.equal(jeepRental.getRentalAmount(), 257.5);
  });

  it('accumulateRewardPoints should return 0', () => {
    assert.equal(jeepRental.accumulateRewardPoints(), 0);
  });
});

describe('Create new Rental for FourXFour Jeep, 300, 12, true should', () => {
  let greyJeep = new FourXFour('Grey Jeep 2013');
  let jeepRental = new Rental(greyJeep, 300, 12, true);
  it('Mileage should match 300', () => {
    assert.equal(jeepRental.getMileage(), 300);
  });

  it('DaysRented should match 12', () => {
    assert.equal(jeepRental.getDaysRented(), 12);
  });

  it('isLate should match true', () => {
    assert.equal(jeepRental.isLate(), true);
  });

  it('getRentalAmount should return 2397.325', () => {
    assert.equal(jeepRental.getRentalAmount(), 2397.325);
  });

  it('accumulateRewardPoints should return 0', () => {
    assert.equal(jeepRental.accumulateRewardPoints(), 0);
  });
});

describe('Create new Customer Virgin Gates should', () => {
  let virginGates = new Customer('Virgin Gates');
  it('Name should match Virgin Gates', () => {
    assert.equal(virginGates.getName(), 'Virgin Gates');
  });

  it('Rentals size should match 0', () => {
    assert.equal(virginGates.getRentals().length, 0);
  });

  it('OutputFormat should match TEXT', () => {
    assert.equal(virginGates.getOutputFormat(), Statement.TEXT);
  });

  it('statement should return Rental Record for:Virgin Gates\nAmount owed is LE 0.00\nYou earned: 0 new Reward Points\n\n', () => {
    assert.equal(virginGates.statement(), 'Rental Record for:Virgin Gates\nAmount owed is LE 0.00\nYou earned: 0 new Reward Points\n\n');
  });
});

describe('Create new Customer Virgin Gates and format JSON should', () => {
  let virginGates = new Customer('Virgin Gates', Statement.JSON);
  let statement = virginGates.statement();

  it('OutputFormat should match JSON', () => {
    assert.equal(virginGates.getOutputFormat(), Statement.JSON);
  });

  it('Statement should match json { customer: { name: Virgin Gates }, rentals: [], totalAmount: 0.00, rewardPoints: 0 }', () => {
    assert.deepEqual(statement, {
      customer: { name: 'Virgin Gates' },
      rentals: [],
      totalAmount: 0.00,
      rewardPoints: 0
    });
  });
});

describe('Create new Customer Virgin Gates and add 3 rentals should', () => {
  let blueHonda = new Sedan('Blue Honda 2008');
  let greyJeep = new FourXFour('Grey Jeep 2013');
  let BlueBMW = new Suv('Blue X3 2017');

  let hondaRental = new Rental(blueHonda, 431, 4, false);
  let jeepRental = new Rental(greyJeep, 431, 4, false);
  let bmwRental = new Rental(BlueBMW, 431, 4, false);

  let virginGates = new Customer('Virgin Gates');

  virginGates.addRental(hondaRental);
  virginGates.addRental(jeepRental);
  virginGates.addRental(bmwRental);

  it('Rentals size should match 3', () => {
    assert.equal(virginGates.getRentals().length, 3);
  });

  it('statement should return Rental Record for:Virgin Gates\n\t\"Blue Honda 2008\"\tLE 912.00\n\t\"Grey Jeep 2013\"\tLE 850.00\n\t\"Blue X3 2017\"\tLE 904.40\nAmount owed is LE 2666.40\nYou earned: 5 new Reward Points\n\n', () => {
    assert.equal(virginGates.statement(), 'Rental Record for:Virgin Gates\n\t\"Blue Honda 2008\"\tLE 912.00\n\t\"Grey Jeep 2013\"\tLE 850.00\n\t\"Blue X3 2017\"\tLE 904.40\nAmount owed is LE 2666.40\nYou earned: 5 new Reward Points\n\n');
  });
});

describe('Create new Customer Virgin Gates and format JSON and add 3 rentals should', () => {
  let blueHonda = new Sedan('Blue Honda 2008');
  let greyJeep = new FourXFour('Grey Jeep 2013');
  let BlueBMW = new Suv('Blue X3 2017');

  let hondaRental = new Rental(blueHonda, 431, 4, false);
  let jeepRental = new Rental(greyJeep, 431, 4, false);
  let bmwRental = new Rental(BlueBMW, 431, 4, false);

  let virginGates = new Customer('Virgin Gates', Statement.JSON);

  virginGates.addRental(hondaRental);
  virginGates.addRental(jeepRental);
  virginGates.addRental(bmwRental);

  let statement = virginGates.statement();

  it('OutputFormat should match JSON', () => {
    assert.equal(virginGates.getOutputFormat(), Statement.JSON);
  });

  it('Statement should match json { customer: { name: Virgin Gates }, rentals: [{ vehicle: Blue Honda 2008, rentalAmount: 912.00 }, { vehicle: Grey Jeep 2013, rentalAmount: 850.00 }, { vehicle: Blue X3 2017, rentalAmount: 904.40 }], totalAmount: 2666.40, rewardPoints: 5 }', () => {
    assert.deepEqual(statement, {
      customer: { name: 'Virgin Gates' },
      rentals: [{
        vehicle: 'Blue Honda 2008',
        rentalAmount: 912.00
      }, {
        vehicle: 'Grey Jeep 2013',
        rentalAmount: 850.00
      }, {
        vehicle: 'Blue X3 2017',
        rentalAmount: 904.40
      }],
      totalAmount: 2666.40,
      rewardPoints: 5
    });
  });
});
