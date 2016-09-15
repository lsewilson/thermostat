function loadCityTemperature(city){
  $.getJSON({
  url: "http://api.openweathermap.org/data/2.5/weather?q="+city+"&APPID=b3e7e921e82d662cfe879bb4a818ce7c",
  method: 'GET',
  success: function( data ) {
    var tempr = data.main.temp;
    $("#location-temperature").text( Math.round(tempr - 273) + "C");
  }
  });
}

function updateTemp(){
  $("#temperature").text( thermostat._temperature );
  $("#temperature").css( "color", thermostat.colour() );
}

function displayPowerSavingMode() {
  $("#power-saving-status").text(
    thermostat._powerSaving ? "on":"off");
}
