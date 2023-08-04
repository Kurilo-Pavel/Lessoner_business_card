import {config} from "./data.js";

const canvas = document.getElementById("mainCanvas");
const context = canvas.getContext("2d");

canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;
context.beginPath();
context.lineWidth = 6;
context.strokeStyle = config.colorLine;

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