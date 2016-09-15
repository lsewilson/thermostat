$(document).ready(function(){
  var thermostat = new Thermostat();

  $("#temperature").text(thermostat.temperature);
  $("#power-saving-status").text(thermostat.powersavemode);

  $("#temperature-up").click(function() {
    thermostat.up();
  $('#temperature').text(thermostat.temperature);
});

  $("#temperature-down").click(function() {
    thermostat.down();
  $('#temperature').text(thermostat.temperature);
});

  $("#temperature-reset").click(function() {
    thermostat.reset();
  $('#temperature').text(thermostat.temperature);
});

  $("#powersave-switch").click(function() {
    thermostat.powerSaveSwitch();
    $("#power-saving-status").text(thermostat.powersavemode);
    $('#temperature').text(thermostat.temperature);
  });
});
