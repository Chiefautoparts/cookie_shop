'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];

var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  salesArr: [],
  name: 'First and Pike',
  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieSold: function(){
    var total = 0;
    for (var i = 0; i < storeHours.lenght - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randomCust());
      this.salesArr.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.salesArr.push(total);
  },
  createListItems: function(){
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    newHeading.innerText = this.name;
    var firstUl = document.createElement('ul');
    for (var i = 0; i < storeHours.lenght; i++) {
      var newLi = document.createElement('li');
      newLi.innerText = storeHours[i] + ': ' + this.salesArr[i] + ' cookies';
      firstUl.appendChild(newLi);
    }
    body.appendChild(firstUl);
  }
};
firstPike.cookieSold();
firstPike.createListItems();
