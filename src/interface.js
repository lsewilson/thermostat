$(document).ready(function(){
  var thermostat = new Thermostat();

  updateTemperature();
  $("#power-saving-status").text(thermostat.powersavemode);

  $("#temperature-up").click(function() {
    thermostat.up();
    updateTemperature();
});

  $("#temperature-down").click(function() {
    thermostat.down();
    updateTemperature();
});

  $("#temperature-reset").click(function() {
    thermostat.reset();
    updateTemperature();
});

  $("#powersave-switch").click(function() {
    thermostat.powerSaveSwitch();
    $("#power-saving-status").text(thermostat.powersavemode);
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyusage());
  }

});
