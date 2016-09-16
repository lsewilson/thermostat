$(document).ready(function(){
  var thermostat = new Thermostat();

  function postData(){
    $.post('http://localhost:9292/thermostat', {
      temperature: thermostat.temperature,
      power_saving_mode: thermostat.powersavemode
    });
  }

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
    postData();
  }

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  }

  displayWeather('London');

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    displayWeather(city);
  });


});
