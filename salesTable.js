'use strict';

var storeHrs = ['', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var body = document.getElementsByTagName('body')[0];
var allStores = [];

var firstAndPike = new CookieShop('1st and Pike', 23, 65, 6.3);
var SeaTac = new CookieShop('SeaTac Airport', 3, 24, 1.2);
var SeaCent = new CookieShop('Seattle Center', 11, 38, 3.7);
var capHill = new CookieShop('Capitol Hill', 20, 38, 2.3);
var alki = new CookieShop('Alki', 2, 16, 4.6);

function CookieShop(name, minCust, maxCust, avgHrSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgHrSale = avgHrSale;
  this.total = 0;
  this.salesArr = [];
  this.hourlyCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.dailyNum = function() {
    for (var i = 0; i < storeHrs.length; i++) {
      var hourlySales = Math.floor(this.hourlyCust() * this.avgHrSale);
      this.salesArr.push(hourlySales);
      this.total += hourlySales;
    }
  };

  this.generateTableRow = function() {
    this.dailyNum();
    var newTable = document.getElementsByTagName('table')[0];
    var tableRow = document.createElement('tr');
    var tableBody = document.getElementById('table-body');
    tableBody.appendChild(tableRow);
    var tdName = document.createElement('th');
    tdName.innerText = this.name;
    tableRow.appendChild(tdName);
    for (var i = 0; i < storeHrs.length - 1; i++) {
      var tdNew = document.createElement('td');
      tdNew.innerText = this.salesArr[i];
      tableRow.appendChild(tdNew);
    }
  };
  allStores.push(this);
}

function createTable() {
  var tableNew = document.createElement('table');
  body.appendChild(tableNew);
  var tableHeading = document.createElement('thead');
  tableNew.appendChild(tableHeading);
  var newTRow = document.createElement('tr');
  tableHeading.appendChild(newTRow);
  for (var i = 0; i < storeHrs.length; i++) {
    var newTH = document.createElement('th');
    newTH.innerText = storeHrs[i];
    newTRow.appendChild(newTH);
  }
  var tableBody = document.createElement('tbody');
  tableNew.appendChild(tableBody);
  tableBody.id = 'table-body';
};
createTable();

for (var i = 0; i < allStores.length; i++) {
  allStores[i].generateTableRow();
}

//firstAndPike.generateTableRow();
//SeaTac.generateTableRow();
//SeaCent.generateTableRow();
//capHill.generateTableRow();
//alki.generateTableRow();
