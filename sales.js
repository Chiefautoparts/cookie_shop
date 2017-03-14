var pike = {
  minCust: 23,
  MaxCust: 65,
  avgNum: 65.3,
  hourlyAvg: function() {
    return Math.floor((Math.random * (this.maxCust - this.minCust) + 1) * 100 + this.minCust);
  },
  custHourly: ['6am ' + hourlyAvg(), '7am ' + hourlyAvg(), '8am ' + hourlyAvg(), '9am ' + hourlyAvg(), '10am ' + hourlyAvg(), '11am ' + hourlyAvg(), '12am ' + hourlyAvg(), '1pm ' + hourlyAvg(), '2pm ' + hourlyAvg(), '3pm ' + hourlyAvg(), '4pm ' + hourlyAvg(), '5pm ' + hourlyAvg(), '6pm ' + hourlyAvg(), '7pm ' + hourlyAvg(), '8pm ' + hourlyAvg()],
  total: cookieAvg(),
  cookieAvg: function() {
    this.custHourly.length = 15;
    for (var i = 0; i < 15; i++) {
      this.custHourly = this.hourlyAvg() * this.avgNum,
                total++;
    };
  }
};
pike.hourlyAvg();
