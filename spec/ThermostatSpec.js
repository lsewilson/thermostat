describe("Thermostat", function() {'use strict';

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

describe("default settings", function() {

    it("should start at 20 degrees", function() {
      expect(thermostat.temperature).toEqual (20);
    });

  });

describe("functions", function() {

    it("can increase temp with up button", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual (21);
    });

  });
  
});
