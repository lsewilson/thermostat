describe("Thermostat", function() {'use strict';

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

describe("default settings", function() {

    it("should start at 20 degrees", function() {
      expect(thermostat.temperature).toEqual (20);
    });

    it("should set min temperature of 10C", function() {
      expect(thermostat.mintemp).toEqual (10);
    });

    it('cannot go below 10C', function() {
      thermostat.temperature = 10;
      expect(function(){ thermostat.down(); }).toThrowError("temperature cannot go below 10C");
    });

describe("power save mode", function() {

    it("if on, max temp is 25C", function() {
      thermostat.temperature = 25;
      expect(function(){ thermostat.up(); }).toThrowError("temperature cannot go above 25C");
    });

    it("if off, max temp is 32C", function() {
      thermostat.powersavemode = false;
      thermostat.temperature = 32;
      expect(function(){ thermostat.up(); }).toThrowError("temperature cannot go above 32C");
    });

  });

});

describe("functions", function() {

    it("can increase temp with up button", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual (21);
    });

    it("can decrease temp with down button", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual (19);
    });

  });

});
