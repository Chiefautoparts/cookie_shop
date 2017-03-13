'use strict';

var pike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  randomCust: function() {
    return Math.floor((Math.random * (this.maxCust - this.minCust) + 1) + this.minCust);
  },
  totalSales: [],
//var hours = ['6am ' + pike, '7am ' + pike, '8am ' + pike, '9am ' + pike, '10am ' + pike, '11am ' + pike, '12pm ' + pike, '1pm ' + pike, '2pm ' + pike, '3pm ' + pike, '4pm ' + pike, '5pm ' + pike, '6pm ' + pike, '7pm ' + pike, '8pm ' + pike];
  hourlyNum: function() {
    totalSales.length = 15;
    var totalCookies = 0;
    for(var i = 0; i < 15; i++){
      tatalSales[i] = this.randomCust() * this.avgSale;
      totalCookies++;
    }
  }
};
