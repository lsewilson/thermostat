$( document ).ready(function() {

    thermostat = new Thermostat();

    $.getJSON({
    url: "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=b3e7e921e82d662cfe879bb4a818ce7c",
    method: 'GET',

    success: function( data ) {
      var tempr = data.main.temp;
      console.log(tempr);
    }
    });


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
