import {config, arrayPulse} from "./data.js";
import dataImpulse from "./script.js";

const electron = document.getElementById("electron");
const contextEl = electron.getContext("2d");

electron.width = config.canvasWidth;
electron.height = config.canvasHeight;

let data = dataImpulse();
const pulse = {
  x: 10,
  y: 10,
  radius: data.radius,
  opacity: data.opacity,
  draw: function () {
    contextEl.beginPath();
    contextEl.arc(this.x, this.y, data.radius / 2, 0, Math.PI * 2);
    contextEl.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    contextEl.fill();
    // contextEl.shadowColor="pink"
    // contextEl.shadowBlur=115;
    contextEl.closePath();
    console.log(this.opacity)
  },
  clear: function () {
    contextEl.clearRect(this.x - data.radius / 2, this.y - data.radius / 2, data.radius, data.radius);
  }
}

const checkPoints = (score, array) => {
  let arrayXY = [];
  array.reduce((array1, array2) => {
    const pointX = Math.abs(array1[0] - array2[0]);
    const pointY = Math.abs(array1[1] - array2[1]);
    const max = Math.max(pointX, pointY);

    for (let i = 0; i <= max; i = i + score) {
      let x = array1[0];
      let y = array1[1];
      if (array1[0] > array2[0]) {
        x = array1[0] - pointX / max * i;
      }
      if (array1[0] < array2[0]) {
        x = array1[0] + pointX / max * i;
      }
      if (array1[1] < array2[1]) {
        y = array1[1] + pointY / max * i;
      }
      if (array1[1] > array2[1]) {
        y = array1[1] - pointY / max * i;
      }
      if (arrayXY.length === 0 || !(x === arrayXY[arrayXY.length - 1][0] && y === arrayXY[arrayXY.length - 1][1])) {
        arrayXY = [...arrayXY, [x, y]];
      }
    }
    return arrayXY[arrayXY.length - 1];
  });
  return arrayXY;
};

let step = 0;
let startInterval;
const start = (score, ar) => {
  const array = checkPoints(score, ar);
  if (step > array.length - 1) {
    step = 0;
  }
  let amountPulse = [1];
  for (let n = 1; n <= data.circle; n++) {
    if (n > 1)
      amountPulse.push(n);
  }
  amountPulse.map((value, index) => {
    if (step + value > array.length - 1) {
      value = value - array.length + 1;
    }
    if (step > array.length - 1) {
      step = 0;
    }
    pulse.x = array[step][0];
    pulse.y = array[step][1];
    pulse.clear();
    pulse.opacity=data.opacity;
    if (data.tail) {
      pulse.x = array[step+value][0];
      pulse.y = array[step+value][1];
      pulse.clear();
      pulse.opacity = Math.abs(data.opacity*index);
    }
    pulse.x = array[step + value][0];
    pulse.y = array[step + value][1];
    pulse.draw();
  })
  step++
};


const go = () => {
  data = dataImpulse();
  contextEl.clearRect(0, 0, electron.width, electron.height);
  clearInterval(startInterval);
  arrayPulse.map(arr => {
    startInterval = setInterval(() => {
      start(data.distance, arr)
    }, data.score);
  });
}
const send = document.getElementById("send");
send.addEventListener("click", go);