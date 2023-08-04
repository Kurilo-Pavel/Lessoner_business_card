import {config} from "./data.js";

const robotConfig = {
  width: 600,
  height: 500,
  score: 5,
}
const canvasRobot = document.getElementById("robot");
const contextRobot = canvasRobot.getContext("2d");

canvasRobot.width = config.canvasWidth;
canvasRobot.height = config.canvasHeight;

contextRobot.beginPath();

const img = new Image();
// img.onload = () => {
// contextRobot.drawImage(img, 0, 0);
// };
img.src = "icons/Robot/Body.svg";

contextRobot.stroke();
let y = 0;
let x = 500;
const tick = () => {
  requestAnimationFrame(down);
  // contextRobot.clearRect(x, y, robotConfig.width, robotConfig.height);
  // requestAnimationFrame(tick);
  // contextRobot.drawImage(img, x, y += robotConfig.score, robotConfig.width, robotConfig.height);
  // if (y > 440) {
  //   // y-=robotConfig.score;
  //   x+=robotConfig.score;
  //   contextRobot.clearRect(x, y, robotConfig.width, robotConfig.height);
  //   contextRobot.drawImage(img, x, y, robotConfig.width, robotConfig.height);
  // }
};
const down = () => {
  contextRobot.clearRect(x, y, robotConfig.width, robotConfig.height);
  const idDown = requestAnimationFrame(down);
  y += robotConfig.score;
  contextRobot.drawImage(img, x, y, robotConfig.width, robotConfig.height);
  if (y > 550) {
    window.cancelAnimationFrame(idDown);
    flyingRobot()
  }
}

const flyingRobot = () => {
  contextRobot.clearRect(x, y, robotConfig.width, robotConfig.height);
  const idFlying = requestAnimationFrame(flyingRobot)
  contextRobot.drawImage(img, x = x + robotConfig.score, y = y - robotConfig.score, robotConfig.width, robotConfig.height);
  if (x > 550) {
    window.cancelAnimationFrame(idFlying);
  }
  // for (let index = 0; index <= 100; index++) {
  //   const;
  // }
  // cancelAnimationFrame(tick);
};
requestAnimationFrame(tick);