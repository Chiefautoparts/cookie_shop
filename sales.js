'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'];

var firstAndPike = {
  minCust: 23,
  MaxCust: 65,
  avgCookies: 6.3,

  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  CookiesPerHour: function() {
    return Math.floor(this.avgCookies * this.randomCust());
  },
  hourlySales: function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < storehours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },
  daylyTotals: function() {
    var total = 0;
    for (var i = 0 ; i < storehours.length ; i++) {
      total += this.hourlySales()[i];
    }
    return total;
  },
  cookieSold: function(){
    var salesArr = [];
    for (var i = 0; i < storeHours.length; i++) {
      salesArr.push(this.storeHours[i] + ': ' + hourlySales[i] + ' cookies');
    }
    return salesArr;
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
  },
};
firstAndPike.createListItems;

var seaTac = {
  minCust: 3,
  MaxCust: 24,
  avgCookies: 1.2,

  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  CookiesPerHour: function() {
    return Math.floor(this.avgCookies * this.randomCust());
  },
  hourlySales: function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < storehours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },
  daylyTotals: function() {
    var total = 0;
    for (var i = 0 ; i < storehours.length ; i++) {
      total += this.hourlySales()[i];
    }
    return total;
  },
  cookieSold: function(){
    var salesArr = [];
    for (var i = 0; i < storeHours.length; i++) {
      salesArr.push(this.storeHours[i] + ': ' + hourlySales[i] + ' cookies');
    }
    return salesArr;
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
  },
};
seaTac.createListItems();

var capHill = {
  minCust: 20,
  MaxCust: 38,
  avgCookies: 2.3,

  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  CookiesPerHour: function() {
    return Math.floor(this.avgCookies * this.randomCust());
  },
  hourlySales: function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < storehours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },
  daylyTotals: function() {
    var total = 0;
    for (var i = 0 ; i < storehours.length ; i++) {
      total += this.hourlySales()[i];
    }
    return total;
  },
  cookieSold: function(){
    var salesArr = [];
    for (var i = 0; i < storeHours.length; i++) {
      salesArr.push(this.storeHours[i] + ': ' + hourlySales[i] + ' cookies');
    }
    return salesArr;
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
  },
};
capHill.createListItems;

var alki = {
  minCust: 2,
  MaxCust: 16,
  avgCookies: 4.6,

  randomCust: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  CookiesPerHour: function() {
    return Math.floor(this.avgCookies * this.randomCust());
  },
  hourlySales: function() {
    var cookiesPerHour = [];
    for (var i = 0 ; i < storehours.length ; i++) {
      cookiesPerHour.push(this.randomCookiesPurchHr());
    }
    return cookiesPerHour;
  },
  daylyTotals: function() {
    var total = 0;
    for (var i = 0 ; i < storehours.length ; i++) {
      total += this.hourlySales()[i];
    }
    return total;
  },
  cookieSold: function(){
    var salesArr = [];
    for (var i = 0; i < storeHours.length; i++) {
      salesArr.push(this.storeHours[i] + ': ' + hourlySales[i] + ' cookies');
    }
    return salesArr;
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
  },
};
alki.createListItems;
