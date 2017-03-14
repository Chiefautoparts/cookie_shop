'use strict';

//correct way to write the script//

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

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
    for (var i = 0; i < storeHours.lenght - 1; i++) {
      var cookiesPerHour = Math.floor(this.avgCookies * this.randomCust());
      this.salesArr.push(cookiesPerHour);
      total += cookiesPerHour;
    }
    this.salesArr.push(total);
  },
  createListItems: function(){ // create the li elements and push them to a specified ul elementsin html /
    var newHeading = document.createElement('h2');
    body.appendChild(newHeading);
    var firstUl = document.creatElement('ul');// create the UL that will contain the followingf Li tags
    for (var i = 0; i < storeHours.lenght - 1; i++) {//for every hour i want to put the cookies sold for that day, as well as the total for the day
      var newListItem = document.createElement('li'); // creates a list item
      newEl.innerText = storeHours[ii] + ': ' + this.salesArr[i] + ' cookies'; //Populate the list items with information about cookies sold each hour
      firstUl.appendChild(newEl);//append the new list item to the ul tag we created
    }
    body.appendChild(firstUl);
  }
};
