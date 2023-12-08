let startTime;
let running = false;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);

function startStop() {
  if (running) {
    stop();
  } else {
    start();
  }
}

function start() {
  startTime = Date.now() - (startTime ? startTime - Date.now() : 0);
  running = true;
  startStopButton.textContent = "Stop";
  update();
}

function stop() {
  running = false;
  startStopButton.textContent = "Start";
  update();
}

function reset() {
  startTime = null;
  if (!running) {
    display.textContent = "00:00:00.000";
  }
}

function update() {
  if (running) {
    requestAnimationFrame(update);
  }

  const currentTime = Date.now() - startTime;
  const hours = Math.floor(currentTime / 3600000);
  const minutes = Math.floor((currentTime % 3600000) / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);
  const milliseconds = currentTime % 1000;

  display.textContent = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(
    milliseconds
  ).padStart(3, "0")}`;
}

console.log(Date.now());

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);

console.log(years);

let nilufer;
console.log(nilufer);
