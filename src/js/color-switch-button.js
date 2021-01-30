import colors from './colors';

const ref = {
  colorBody: document.querySelector('body'),
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
};

ref.startButton.addEventListener('click', startChangingBackgroundColor);
ref.startButton.addEventListener('mouseenter', toInitialColor);
ref.startButton.addEventListener('mouseleave', discardInitialColor);
ref.stopButton.addEventListener('click', stopChangingBackgroundColor);

let intervalId = null;
let initialId = null;
let changeRun = false;

function toInitialColor() {
  ref.startButton.style.backgroundColor = '#00ff00b0';
  ref.stopButton.style.backgroundColor = '#ff0000b0';
}

function discardInitialColor() {
  if (!changeRun) {
    ref.startButton.style.backgroundColor = null;
    ref.stopButton.style.backgroundColor = null;
  }
}

function startChangingBackgroundColor() {
  console.dir(ref.startButton);
  intervalId = setInterval(() => {
    console.log(intervalId);
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const indexColor = randomIntegerFromInterval(0, colors.length - 1);
    ref.colorBody.style.backgroundColor = colors[indexColor];
  }, 1000);
  ref.startButton.disabled = true;
  changeRun = true;
  clearInterval(initialId);
  initialId = null;
}

function stopChangingBackgroundColor() {
  clearInterval(intervalId);
  // discardInitialColor(intervalId);
  ref.startButton.disabled = false;
  initialId = setTimeout(() => {
    changeRun = false;
    discardInitialColor(intervalId);
  }, 11000);
  intervalId = null;
}
