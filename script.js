const canvas = document.getElementById("mainCanvas");
const electron = document.getElementById("electron");
const contextEl = electron.getContext("2d");
const context = canvas.getContext("2d");


const config = {
  electronWidth: 20,
  colorLine: "#42E8E0",
  score: 10,
}
canvas.width = 2300;
canvas.height = 1600;
context.beginPath();
context.lineWidth = 6;
context.strokeStyle = config.colorLine;


electron.width = 2300;
electron.height = 1600;
contextEl.beginPath();

context.moveTo(830, 750);
context.lineTo(500, 980);
context.lineTo(830, 1200);
context.lineTo(1170, 980);
context.lineTo(830, 750);

context.moveTo(950, 500);
context.lineTo(790, 600);
context.lineTo(790, 779);

context.moveTo(900, 380);
context.lineTo(710, 500);
context.lineTo(710, 600);
context.lineTo(790, 650);

context.moveTo(700, 230);
context.lineTo(800, 300);
context.lineTo(800, 358);
context.lineTo(580, 500);
context.lineTo(580, 700);
context.lineTo(743, 810);

context.moveTo(630, 655);
context.lineTo(700, 700);
context.lineTo(700, 780);

context.moveTo(100, 0);
context.lineTo(400, 200);
context.lineTo(400, 390);

context.moveTo(0, 140);
context.lineTo(500, 450);
context.lineTo(500, 700);
context.lineTo(710, 835);

context.moveTo(0, 300);
context.lineTo(200, 430);
context.lineTo(200, 517);

context.moveTo(100, 450);
context.lineTo(250, 550);
context.lineTo(250, 600);
context.lineTo(658, 870);

context.moveTo(0, 540);
context.lineTo(250, 700);

context.moveTo(0, 700);
context.lineTo(400, 700);

context.moveTo(0, 800);
context.lineTo(470, 800);
context.lineTo(615, 900);

context.moveTo(0, 870);
context.lineTo(150, 870);
context.lineTo(250, 800);

context.moveTo(0, 950);
context.lineTo(150, 950);
context.lineTo(285, 850);
context.lineTo(470, 850);
context.lineTo(580, 925);

context.moveTo(200, 1000);
context.lineTo(325, 900);
context.lineTo(543, 900);

context.moveTo(300, 1040);
context.lineTo(405, 950);
context.lineTo(542, 950);

context.moveTo(100, 1000);
context.lineTo(250, 1100);
context.lineTo(387, 1100);

context.moveTo(0, 1050);
context.lineTo(174, 1050);

context.moveTo(0, 1170);
context.lineTo(66, 1170);

context.moveTo(0, 1210);
context.lineTo(100, 1150);
context.lineTo(330, 1150);
context.lineTo(515, 990);

context.moveTo(0, 1330);
context.lineTo(200, 1200);
context.lineTo(372, 1200);

context.moveTo(0, 1530);
context.lineTo(200, 1400);
context.lineTo(200, 1350);
context.lineTo(570, 1027);

context.moveTo(100, 1600);
context.lineTo(350, 1440);
context.lineTo(350, 1300);
context.lineTo(615, 1057);

context.moveTo(300, 1600);
context.lineTo(450, 1500);
context.lineTo(450, 1280);
context.lineTo(660, 1086);

context.moveTo(600, 1600);
context.lineTo(600, 1240);
context.lineTo(720, 1126);

context.moveTo(700, 1600);
context.lineTo(700, 1450);
context.lineTo(600, 1380);

context.moveTo(750, 1400);
context.lineTo(600, 1299);

context.moveTo(950, 1600);
context.lineTo(900, 1560);
context.lineTo(900, 1500);
context.lineTo(800, 1430);
context.lineTo(800, 1368);

context.moveTo(1000, 1500);
context.lineTo(700, 1300);
context.lineTo(700, 1250);
context.lineTo(780, 1168);

context.moveTo(1050, 1450);
context.lineTo(900, 1350);
context.lineTo(775, 1350);

context.moveTo(1250, 1400);
context.lineTo(1200, 1400);
context.lineTo(866, 1178);

context.moveTo(1150, 1300);
context.lineTo(920, 1142);

context.moveTo(1150, 1600);
context.lineTo(1300, 1500);
context.lineTo(1300, 1330);
context.lineTo(970, 1110);

context.moveTo(1250, 1600);
context.lineTo(1201, 1566);

context.moveTo(1500, 1600);
context.lineTo(1400, 1540);
context.lineTo(1400, 1460);
context.lineTo(1300, 1400);

context.moveTo(1600, 1600);
context.lineTo(1600, 1460);
context.lineTo(1019, 1079);

context.moveTo(1900, 1600);
context.lineTo(1700, 1470);
context.lineTo(1700, 1367);

context.moveTo(2300, 1400);
context.lineTo(2150, 1500);
context.lineTo(1900, 1500);
context.lineTo(1600, 1300);
context.lineTo(1450, 1300);
context.lineTo(1067, 1047);

context.moveTo(1800, 1380);
context.lineTo(1600, 1245);
context.lineTo(1470, 1245);
context.lineTo(1116, 1016);

context.moveTo(2000, 980);
context.lineTo(1660, 1200);
context.lineTo(1400, 1200);

context.moveTo(1600, 1000);
context.lineTo(1450, 1100);
context.lineTo(1350, 1100);

context.moveTo(1900, 1000);
context.lineTo(1800, 930);
context.lineTo(1600, 930);
context.lineTo(1298, 1135);

context.moveTo(1350, 1000);
context.lineTo(1280, 1050);
context.lineTo(1169, 1050);

context.moveTo(1550, 870);
context.lineTo(1450, 800);
context.lineTo(1360, 800);
context.lineTo(1122, 948);

context.moveTo(1280, 800);
context.lineTo(1150, 880);
context.lineTo(1150, 931);

context.moveTo(1650, 800);
context.lineTo(1500, 700);
context.lineTo(1350, 700);
context.lineTo(1200, 800);
context.lineTo(1100, 800);

context.moveTo(1800, 300);
context.lineTo(1800, 470);
context.lineTo(1600, 600);
context.lineTo(1400, 600);
context.lineTo(1000, 866);

context.moveTo(1550, 300);
context.lineTo(1400, 400);
context.lineTo(1400, 530);
context.lineTo(950, 830);

context.moveTo(750, 150);
context.lineTo(1200, 450);
context.lineTo(1200, 600);
context.lineTo(900, 798);

context.moveTo(800, 260);
context.lineTo(1020, 400);
context.lineTo(1125, 400);

context.moveTo(1100, 500);
context.lineTo(1100, 600);
context.lineTo(950, 700);
context.lineTo(950, 765);

context.stroke();

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
      arrayXY = [...arrayXY, [x, y]];
    }
    return arrayXY[arrayXY.length - 1];
  });
  return arrayXY;
};
const start = (score, ar) => {
  let i = 0;
  const array = checkPoints(score, ar);
  const tick = () => {
    requestAnimationFrame(tick);
    let n = 0;
    if (i > 0) {
      n = i - 1;
    } else if (i === 0) {
      n = array.length - 1;
    }
    contextEl.beginPath()
    contextEl.clearRect(
      array[n][0] - config.electronWidth,
      array[n][1] - config.electronWidth,
      config.electronWidth * 2,
      config.electronWidth * 2
    );
    contextEl.arc(
      array[i][0],
      array[i][1],
      config.electronWidth / 2,
      0,
      Math.PI * 2
    );
    contextEl.fillStyle = "white";
    contextEl.fill();
    if (i < array.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }
  requestAnimationFrame(tick);
}

const arrayCoordinates = [
  [[950, 500], [790, 600], [790, 779]],
  [[900, 380], [710, 500], [710, 600], [790, 650], [790, 779]],
  [[700, 230], [800, 300], [800, 358], [580, 500], [580, 700], [743, 810]],
  [[630, 655], [700, 700], [700, 780], [743, 810]],
  [[100, 0], [400, 200], [400, 390], [500, 450], [500, 700], [710, 835]],
  [[0, 140], [500, 450], [500, 700], [710, 835]],
  [[0, 300], [200, 430], [200, 517], [250, 550], [250, 600], [658, 870]],
  [[100, 450], [250, 550], [250, 600], [658, 870]],
  [[0, 540], [250, 700], [400, 700], [400, 700], [658, 870]],
  [[0, 700], [400, 700], [658, 870]],
  [[0, 800], [470, 800], [615, 900]],
  [[0, 870], [150, 870], [250, 800], [470, 800], [615, 900]],
  [[0, 950], [150, 950], [285, 850], [470, 850], [580, 925]],
  [[200, 1000], [325, 900], [543, 900], [580, 925]],
  [[300, 1040], [405, 950], [542, 950]],
  [[100, 1000], [250, 1100], [387, 1100], [515, 990]],
  [[0, 1050], [174, 1050], [250, 1100], [387, 1100], [515, 990]],
  [[0, 1170], [66, 1170], [100, 1150], [330, 1150], [515, 990]],
  [[0, 1210], [100, 1150], [330, 1150], [515, 990]],
  [[0, 1330], [200, 1200], [372, 1200], [570, 1027]],
  [[0, 1530], [200, 1400], [200, 1350], [570, 1027]],
  [[100, 1600], [350, 1440], [350, 1300], [615, 1057]],
  [[300, 1600], [450, 1500], [450, 1280], [660, 1086]],
  [[600, 1600], [600, 1240], [720, 1126]],
  [[700, 1600], [700, 1450], [600, 1380], [600, 1240], [720, 1126]],
  [[750, 1400], [600, 1299], [600, 1240], [720, 1126]],
  [[950, 1600], [900, 1560], [900, 1500], [800, 1430], [800, 1368], [700, 1300], [700, 1250], [780, 1168]],
  [[1000, 1500], [700, 1300], [700, 1250], [780, 1168]],
  [[1050, 1450], [900, 1350], [775, 1350], [700, 1300], [700, 1250], [780, 1168]],
  [[1250, 1400], [1200, 1400], [866, 1178]],
  [[1150, 1300], [920, 1142]],
  [[1150, 1600], [1300, 1500], [1300, 1330], [970, 1110]],
  [[1250, 1600], [1201, 1566], [1300, 1500], [1300, 1330], [970, 1110]],
  [[1500, 1600], [1400, 1540], [1400, 1460], [1300, 1400], [1300, 1330], [970, 1110]],
  [[1600, 1600], [1600, 1460], [1019, 1079]],
  [[1900, 1600], [1700, 1470], [1700, 1367], [1600, 1300], [1450, 1300], [1067, 1047]],
  [[2300, 1400], [2150, 1500], [1900, 1500], [1600, 1300], [1450, 1300], [1067, 1047]],
  [[1800, 1380], [1600, 1245], [1470, 1245], [1116, 1016]],
  [[2000, 980], [1660, 1200], [1400, 1200], [1116, 1016]],
  [[1600, 1000], [1450, 1100], [1350, 1100], [1298, 1135], [1116, 1016]],
  [[1900, 1000], [1800, 930], [1600, 930], [1298, 1135], [1116, 1016]],
  [[1350, 1000], [1280, 1050], [1169, 1050], [1116, 1016]],
  [[1550, 870], [1450, 800], [1360, 800], [1122, 948]],
  [[1280, 800], [1150, 880], [1150, 931], [1122, 948]],
  [[1650, 800], [1500, 700], [1350, 700], [1200, 800], [1100, 800], [1000, 866]],
  [[1800, 300], [1800, 470], [1600, 600], [1400, 600], [1000, 866]],
  [[1550, 300], [1400, 400], [1400, 530], [950, 830]],
  [[750, 150], [1200, 450], [1200, 600], [900, 798]],
  [[800, 260], [1020, 400], [1125, 400], [1200, 450], [1200, 600], [900, 798]],
  [[1100, 500], [1100, 600], [950, 700], [950, 765], [900, 798]]
];

arrayCoordinates.map(arr => {
  start(config.score, arr);
});