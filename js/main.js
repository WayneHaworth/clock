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
      

      if ($('.volume').hasClass('fa-volume-up')) {tick[0].play();}
  }, 1000);

  $('.volume').on('click', function() {
    if ($(this).hasClass('fa-volume-up')) {
      $(this).addClass('fa-volume-off');
      $(this).removeClass('fa-volume-up');
      window.console.log("un-mute");
      tick[0].play();
      return 1;
    }
    if ($(this).hasClass('fa-volume-off')) {
      $(this).addClass('fa-volume-up');
      $(this).removeClass('fa-volume-off');
      window.console.log("mute");
      tick[0].pause();
      return 1;
    }
    else { window.console.log("Error");}
  });
});

