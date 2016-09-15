$( document ).ready(function() {

    thermostat = new Thermostat();

    function updateTemp(){
      $("#temperature").text( thermostat._temperature );
      $("#temperature").css( "color", thermostat.colour() );
    }

    function displayPowerSavingMode() {
      $("#power-saving-status").text(
        thermostat._powerSaving ? "on":"off");
    }


    updateTemp();
    displayPowerSavingMode();

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
