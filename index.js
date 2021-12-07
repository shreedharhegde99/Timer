 window.addEventListener("load", function () {
  let start = document.querySelector(".start");
  start.addEventListener("click", timerStart);

  let reset = document.querySelector(".reset");
  reset.addEventListener("click", timerResest);

  let seconds = document.getElementById("seconds");
  let minutes = document.getElementById("minutes");
  let hours = document.getElementById("hours");

  //   var start = document.querySelector(".start");
  var startTimer;
  var isRunning = false;
  var second = 0;
  var minute = 0;
  var hour = 0;
  var zero = "0";
  function timerStart() {
    if (!isRunning) {
      startTimer = setInterval(() => {
        second++;
        // setting minutes
        if (second == 60) {
          second = 0;
          minute++;
          if (minute == 60) {
            minute = 0;
            hour++;
            if (Number(hours.textContent) < 9) {
              hours.textContent = `${zero}${hour}`;
            } else {
              hours.textContent = `${hour}`;
            }
          }
          if (Number(minutes) == 0) {
            minutes.textContent = "00";
          } else if (Number(minutes.textContent) < 9) {
            minutes.textContent = `${zero}${minute}`;
          } else {
            minutes.textContent = `${minute}`;
          }
        }
        // setting seconds
        Number(seconds.textContent) < 9
          ? (seconds.textContent = `${zero}${second}`)
          : (seconds.textContent = `${second}`);
        // console.log(seconds.textContent);
      }, 1000);
      isRunning = true;
      start.textContent = "PAUSE";
    } else {
      clearInterval(startTimer);
      isRunning = false;
      start.textContent = "RESUME";
    }
  }

  function timerResest() {
    clearInterval(startTimer);
      isRunning = false;
    start.textContent = "START";
    var display = document.querySelectorAll(".value");
    for (var i = 0; i < display.length; i++) {
      display[i].textContent = "00";
      second = 0;
      minute = 0;
      hour = 0;
    }
  }
});
