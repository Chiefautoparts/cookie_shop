'use strict';

//correct way to write the script//

var hourOpp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  numArr: [],
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSold: function(){
    for (var i = 0; i < hourOpp.length - 1; i++);
  }
};
