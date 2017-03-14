'use strict';

var pike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  randomCust: function() {
    return Math.floor((Math.random * (this.maxCust - this.minCust) + 1) + this.minCust);
  },
  totalSales: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ],
  hourlyNum: function() {
    this.totalSales.length = 15;
    for(var i = 0; i < 15; i++){
      this.totalSales[i] = this.randomCust() * this.avgSale;
      i++;
    }
  }
};
pike.totalSales[12];
