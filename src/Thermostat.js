function Thermostat(){'use strict';

this.temperature = 20;
this.mintemp = 10;

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.temperature == 10)
  {throw new Error('temperature cannot go below 10C');
}
  this.temperature -= 1;
};

}
