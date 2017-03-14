'use strict';

//correct way to write the script//

var hourOpp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  salesArr: [],
  randCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSold: function(){
    var total = 0;
    for (var i = 0; i < hourOpp.lenght - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randomCust());
      this.salesArr.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.salesArr.push(total);
  },
  createListItems: function(){} //create the li elements and push them to a specified ul elements in html.
};

var body = document.getElementsByTagName('body')[0];
