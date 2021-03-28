//recuperando o canvas
const meuCanvas = document.querySelector("#meuCanvas");
const ctx = meuCanvas.getContext("2d");

const direcaoDasTeclas1 = {
  ArrowUp: false,
  ArrowRight: false,
  ArrowDown: false,
  ArrowLeft: false,
  w: false,
  d: false,
  s: false,
  a: false,
};

const q1 = {
  x: 0,
  y: 0,
  w: 50,
  h: 50,
};

const q2 = {
  x: 0,
  y: 450,
  w: 50,
  h: 50,
};

function criarQuadrado() {
  ctx.clearRect(0, 0, meuCanvas.width, meuCanvas.height);

  ctx.fillStyle = "pink";
  ctx.fillRect(q1.x, q1.y, q1.w, q1.h);

  ctx.fillStyle = "red";
  ctx.fillRect(q2.x, q2.y, q2.w, q2.h);
}

const dentroDoLimite = (value) => {
  return value >= 0 && value <= 450;
};

function mover() {
  const {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    a,
    w,
    s,
    d
  } = direcaoDasTeclas1;
  //Robô 1
  if (ArrowLeft && dentroDoLimite(q1.x - 5)) {
    q1.x -= 5;
  }

  if (ArrowRight && dentroDoLimite(q1.x + 5)) {
    q1.x += 5;
  }

  if (ArrowUp && dentroDoLimite(q1.y - 5)) {
    q1.y -= 5;
  }

  if (ArrowDown && dentroDoLimite(q1.y + 5)) {
    q1.y += 5;
  }

  //Robô 2
  if (a && dentroDoLimite(q2.x - 5)) {
    q2.x -= 5;
  }

  if (d && dentroDoLimite(q2.x + 5)) {
    q2.x += 5;
  }

  if (w && dentroDoLimite(q2.y - 5)) {
    q2.y -= 5;
  }

  if (s && dentroDoLimite(q2.y + 5)) {
    q2.y += 5;
  }
}

window.addEventListener("keydown", (e) => {
    direcaoDasTeclas1[e.key] = true;
  });

window.addEventListener("keyup", (e) => {
    direcaoDasTeclas1[e.key] = false;
  });

function atualizarTela() {
  requestAnimationFrame(atualizarTela, meuCanvas);
  mover();
  criarQuadrado();
}

atualizarTela();
