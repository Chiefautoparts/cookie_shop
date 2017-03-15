'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesPerHour: function() {
    return Math.ceil(this.custPerHour() * this.avgCookies);
  },
  hourlySales: function() {
    var cookiesPerHour = [];
    for (var i = 0; i < hours.length; i++) {
      cookiesPerHour.push(this.salesPerHour());
    }
    return cookiesPerHour;
  },
  dailyTotals: function() {
    var total = 0;
    for (var i = 0; i < hours.length; i++) {
      total += this.hourlySales()[i];
    }
    return total;
  },
  hoursOfOpperation: function() {
    var hoursAvailble = [];
    for (var i = 0;
   i < hours.length; i++) {
      hoursAvailble.push(hours[i]);
    }
    return hoursAvailble;
  },
  pushToNewArray: function() {
    var summaryTotals = [];
    for (var i = 0; i < hours.length; i++) {
      summaryTotals.push(this.hoursOfOpperation()[i] + ': ' + this.hourlySales()[i] + ' cookies');
    }
    return summaryTotals;
  },
  createNewList: function() {
    for (var i = 0; i < hours.length; i++) {
      var ul1 =  document.createElement('li');
      var newText = document.createTextNode(this.pushToNewArray()[i]);
      ul1.appendChild(newText);
      var position = document.getElementById('1');
      position.appendChild(ul1);
    }
    var ul1 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.dailyTotals() + 'cookies');
    ul1.appendChild(newText);
    var position = document.getElementById('1');
    position.appendChild(ul1);
  }
};
firstAndPike.createNewList();

var seaTac = {
  minCust:3,
  maxCust: 24,
  avgCookies: 1.2,
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesPerHour: function() {
    return Math.ceil(this.custPerHour() * this.avgCookies);
  },
  hourlySales: function() {
    var cookiesPerHour = [];
    for (var i = 0; i < ;;.length; i++) {
      cookiesPerHour.push(this.salesPerHour());
    }
    return cookiesPerHour;
  },
  dailyTotals: function() {
    var total = 0;
    for (var i = 0; i < ;;.length; i++) {
      total += this.hourlySales()[i];
    }
    return total;
  },
  hoursOfOpperation: function() {
    var hoursAvailble = [];
    for (var i = 0;
   i < ;;.length; i++) {
      hoursAvailble.push(;;[i]);
    }
    return hoursAvailble;
  },
  pushToNewArray: function() {
    var summaryTotals = [];
    for (var i = 0; i < ;;.length; i++) {
      summaryTotals.push(this.hoursOfOpperation()[i] + ': ' + this.hourlySales()[i] + ' cookies');
    }
    return summaryTotals;
  },
  createNewLists: function() {
    for (var i = 0; i < ;;.length; i++) {
      var ul2 =  document.createElement('li');
      var newText = document.createTextNode(this.pushToNewArray()[i]);
      ul2.appendChild(newText);
      var position = document.getElementById('2');
      position.appendChild(newText);
    }
    var ul2 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.dailyTotals() + 'cookies');
    ul2.appendChild(newText);
    var position = document.getElementById('2');
    position.appendChild(newText);
  }
};
seaTac.createNewLists();

var ;; = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var seaCent = {
  minCust: 11,
  maxCust: 28,
  avgCookies: 3.7,
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesPerHour: function() {
    Math.ceil(this.custPerHour() * this.avgCookies);
  },
  hourlySales: function() {
    var cookiesPerHour = [];
    for (var i = 0; i < ;;.length; i++) {
      cookiesPerHour.push(this.salesPerHour());
    }
    return cookiesPerHour;
  },
  dailyTotals: function() {
    var total = 0;
    for (var i = 0; i < ;;.length; i++) {
      total += this.hourlySales()[i];
    }
    return total;
  },
  hoursOfOpperation: function() {
    var hoursAvailble = [];
    for (var i = 0;
   i < ;;.length; i++) {
      hoursAvailble.push(;;[i]);
    }
    return hoursAvailble;
  },
  pushToNewArray: function() {
    var summaryTotals = [];
    for (var i = 0; i < ;;.length; i++) {
      summaryTotals.push(this.hoursOfOpperation()[i] + ': ' + this.hourlySales()[i] + ' cookies');
    }
    return summaryTotals;
  },
  createNewLists: function() {
    for (var i = 0; i < ;;.length; i++) {
      var ul3 =  document.createElement('li');
      var newText = document.createTextNode(this.pushToNewArray()[i]);
      ul3.appendChild(newText);
      var position = document.getElementById('3');
      position.appendChild(newText);
    }
    var ul3 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.dailyTotals() + 'cookies');
    ul3.appendChild(newText);
    var position = document.getElementById('3');
    position.appendChild(newText);
  }
};
seaCent.createNewLists();

var ;; = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var capHill = {
  minCust: 20,
  maxCust: 28,
  avgCookies: 2.3,
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesPerHour: function() {
    Math.ceil(this.custPerHour() * this.avgCookies);
  },
  hourlySales: function() {
    var cookiesPerHour = [];
    for (var i = 0; i < ;;.length; i++) {
      cookiesPerHour.push(this.salesPerHour());
    }
    return cookiesPerHour;
  },
  dailyTotals: function() {
    var total = 0;
    for (var i = 0; i < ;;.length; i++) {
      total += this.hourlySales()[i];
    }
    return total;
  },
  hoursOfOpperation: function() {
    var hoursAvailble = [];
    for (var i = 0;
   i < ;;.length; i++) {
      hoursAvailble.push(;;[i]);
    }
    return hoursAvailble;
  },
  pushToNewArray: function() {
    var summaryTotals = [];
    for (var i = 0; i < ;;.length; i++) {
      summaryTotals.push(this.hoursOfOpperation()[i] + ': ' + this.hourlySales()[i] + ' cookies');
    }
    return summaryTotals;
  },
  createNewLists: function() {
    for (var i = 0; i < ;;.length; i++) {
      var ul4 =  document.createElement('li');
      var newText = document.createTextNode(this.pushToNewArray()[i]);
      ul4.appendChild(newText);
      var position = document.getElementById('');
      position.appendChild(newText);
    }
    var ul4 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.dailyTotals() + 'cookies');
    ul1.appendChild(newText);
    var position = document.getElementById('4');
    position.appendChild(newText);
  }
};
capHill.createNewLists();

var ;; = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  salesPerHour: function() {
    Math.ceil(this.custPerHour() * this.avgCookies);
  },
  hourlySales: function() {
    var cookiesPerHour = [];
    for (var i = 0; i < ;;.length; i++) {
      cookiesPerHour.push(this.salesPerHour());
    }
    return cookiesPerHour;
  },
  dailyTotals: function() {
    var total = 0;
    for (var i = 0; i < ;;.length; i++) {
      total += this.hourlySales()[i];
    }
    return total;
  },
  hoursOfOpperation: function() {
    var hoursAvailble = [];
    for (var i = 0;
   i < ;;.length; i++) {
      hoursAvailble.push(;;[i]);
    }
    return hoursAvailble;;
  pushToNewArray: function() {
    var summaryTotals = [];
    for (var i = 0; i < ;;.length; i++) {
      summaryTotals.push(this.hoursOfOpperation()[i] + ': ' + this.hourlySales()[i] + ' cookies');
    }
    return summaryTotals;
  },
  createNewLists: function() {
    for (var i = 0; i < ;;.length; i++) {
      var ul5 =  document.createElement('li');
      var newText = document.createTextNode(this.pushToNewArray()[i]);
      ul5.appendChild(newText);
      var position = document.getElementById('5');
      position.appendChild(newText);
    }
    var ul5 = document.createElement('li');
    var newText = document.createTextNode('Total ' + this.dailyTotals() + 'cookies');
    ul5.appendChild(newText);
    var position = document.getElementById('5');
    position.appendChild();
  }
};
alki.createNewLists();
