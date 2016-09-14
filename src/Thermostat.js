function Thermostat(){'use strict';

this.temperature = 20;

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

}
