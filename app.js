'use strict';

var pike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  randomCust: function() {
    return Math.floor((Math.random * (this.maxCust - this.minCust) + 1) + this.minCust);
  },
  totalSales: [],
  //hours: [ {'6am ' + randomCust()}, {'7am ' + randomCust()}, {'8am ' + randomCust()}, {'9am ' + randomCust()}, {'10am ' + randomCust()}, {'11am ' + randomCust()}, {'12pm ' + randomCust()}, {'1pm ' + randomCust()}, {'2pm ' + randomCust()}, {'3pm ' + randomCust()}, {'4pm ' + randomCust()}, {'5pm ' + randomCust()}, {'6pm ' + randomCust()}, {'7pm ' + randomCust()}, {'8pm ' + randomCust()} ]
  hourlyNum: function() {
    this.totalSales.length = 15;
    for(var i = 0; i < 15; i++){
      this.totalSales[i] = this.randomCust() * this.avgSale;
      i++;
    }
  }
};
pike.totalSales[12];
