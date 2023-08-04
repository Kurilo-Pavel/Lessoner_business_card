const config = {
  canvasWidth: 2300,
  canvasHeight: 1600,
  colorLine: "#42E8E0",
  // interval: dataImpulse().score,
  // distance: dataImpulse().distance,
  // circle: dataImpulse().circle,
  // opacity:dataImpulse().opacity,
  // radius: dataImpulse().radius
};

const arrayPulse = [
  // [[950, 500], [790, 600], [790, 779]],
  // [[900, 380], [710, 500], [710, 600], [790, 650], [790, 779]],
  // [[700, 230], [800, 300], [800, 358], [580, 500], [580, 700], [743, 810]],
  // [[630, 655], [700, 700], [700, 780], [743, 810]],
  // [[100, 0], [400, 200], [400, 390], [500, 450], [500, 700], [710, 835]],
  // [[0, 140], [500, 450], [500, 700], [710, 835]],
  // [[0, 300], [200, 430], [200, 517], [250, 550], [250, 600], [658, 870]],
  // [[100, 450], [250, 550], [250, 600], [658, 870]],
  // [[0, 540], [250, 700], [400, 700], [400, 700], [658, 870]],
  // [[0, 700], [400, 700], [658, 870]],
  // [[0, 800], [470, 800], [615, 900]],
  // [[0, 870], [150, 870], [250, 800], [470, 800], [615, 900]],
  // [[0, 950], [150, 950], [285, 850], [470, 850], [580, 925]],
  // [[200, 1000], [325, 900], [543, 900], [580, 925]],
  // [[300, 1040], [405, 950], [542, 950]],
  // [[100, 1000], [250, 1100], [387, 1100], [515, 990]],
  // [[0, 1050], [174, 1050], [250, 1100], [387, 1100], [515, 990]],
  // [[0, 1170], [66, 1170], [100, 1150], [330, 1150], [515, 990]],
  // [[0, 1210], [100, 1150], [330, 1150], [515, 990]],
  [[0, 1330], [200, 1200], [372, 1200], [570, 1027]],
  // [[0, 1530], [200, 1400], [200, 1350], [570, 1027]],
  // [[100, 1600], [350, 1440], [350, 1300], [615, 1057]],
  // [[300, 1600], [450, 1500], [450, 1280], [660, 1086]],
  // [[600, 1600], [600, 1240], [720, 1126]],
  // [[700, 1600], [700, 1450], [600, 1380], [600, 1240], [720, 1126]],
  // [[750, 1400], [600, 1299], [600, 1240], [720, 1126]],
  // [[950, 1600], [900, 1560], [900, 1500], [800, 1430], [800, 1368], [700, 1300], [700, 1250], [780, 1168]],
  // [[1000, 1500], [700, 1300], [700, 1250], [780, 1168]],
  // [[1050, 1450], [900, 1350], [775, 1350], [700, 1300], [700, 1250], [780, 1168]],
  // [[1250, 1400], [1200, 1400], [866, 1178]],
  // [[1150, 1300], [920, 1142]],
  // [[1150, 1600], [1300, 1500], [1300, 1330], [970, 1110]],
  // [[1250, 1600], [1201, 1566], [1300, 1500], [1300, 1330], [970, 1110]],
  // [[1500, 1600], [1400, 1540], [1400, 1460], [1300, 1400], [1300, 1330], [970, 1110]],
  // [[1600, 1600], [1600, 1460], [1019, 1079]],
  // [[1900, 1600], [1700, 1470], [1700, 1367], [1600, 1300], [1450, 1300], [1067, 1047]],
  // [[2300, 1400], [2150, 1500], [1900, 1500], [1600, 1300], [1450, 1300], [1067, 1047]],
  // [[1800, 1380], [1600, 1245], [1470, 1245], [1116, 1016]],
  // [[2000, 980], [1660, 1200], [1400, 1200], [1116, 1016]],
  // [[1600, 1000], [1450, 1100], [1350, 1100], [1298, 1135], [1116, 1016]],
  // [[1900, 1000], [1800, 930], [1600, 930], [1298, 1135], [1116, 1016]],
  // [[1350, 1000], [1280, 1050], [1169, 1050], [1116, 1016]],
  // [[1550, 870], [1450, 800], [1360, 800], [1122, 948]],
  // [[1280, 800], [1150, 880], [1150, 931], [1122, 948]],
  // [[1650, 800], [1500, 700], [1350, 700], [1200, 800], [1100, 800], [1000, 866]],
  // [[1800, 300], [1800, 470], [1600, 600], [1400, 600], [1000, 866]],
  // [[1550, 300], [1400, 400], [1400, 530], [950, 830]],
  // [[750, 150], [1200, 450], [1200, 600], [900, 798]],
  // [[800, 260], [1020, 400], [1125, 400], [1200, 450], [1200, 600], [900, 798]],
  // [[1100, 500], [1100, 600], [950, 700], [950, 765], [900, 798]]
];
export {config, arrayPulse};