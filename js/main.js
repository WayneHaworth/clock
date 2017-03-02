$(document).ready(function() {

  var tick = $('audio[data-key="second"');

  function secondsToDegree() {
      var moment = new Date(); 
      var s = moment.getSeconds() * 6;
      return s;
  }

  function minutesToDegree() {
      var moment = new Date(); 
      var m = moment.getMinutes() * 6;
      return m;
  }

  function hoursToDegree() {
      var moment = new Date(); 
      var m = moment.getHours() % 12 / 12 * 360 + (0 / 12);
      return m;
  }

  window.setInterval(function() {
      $('.second').css("transform", "rotate(" + (secondsToDegree() + 360) + "deg)");
      $('.minute').css("transform", "rotate(" + (minutesToDegree() + 360) + "deg)");
      $('.hour').css("transform", "rotate(" + (hoursToDegree() + 360) + "deg)");
      tick[0].play();
  }, 1000);
});

