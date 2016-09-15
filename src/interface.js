$( document ).ready(function() {

    thermostat = new Thermostat();
    var city = $("#cities option:selected").text();

    loadCityTemperature(city);
    updateTemp();
    displayPowerSavingMode();

    $("#cities").change( function() {
      var city = $("#cities option:selected").text();
      loadCityTemperature(city);
    });

    $("#temperature-up").click(function() {
      thermostat.increase();
      updateTemp();
    });

    $("#temperature-down").click(function() {
      thermostat.decrease();
      updateTemp();
    });

    $("#temperature-reset").click(function() {
      thermostat.resetTemp();
      updateTemp();
    });

    $("#powersaving-on").click(function() {
      thermostat.turnPowerSavingOn();
      displayPowerSavingMode();
    });

    $("#powersaving-off").click(function() {
      thermostat.turnPowerSavingOff();
      displayPowerSavingMode();
    });

});
