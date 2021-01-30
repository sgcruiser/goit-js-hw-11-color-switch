import colors from './colors';

const ref = {
  colorBody: document.querySelector('body'),
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
};

ref.startButton.addEventListener('click', startChangingBackgroundColor);
ref.stopButton.addEventListener('click', stopChangingBackgroundColor);

let intervalId = null;

function startChangingBackgroundColor() {
  intervalId = setInterval(() => {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const indexColor = randomIntegerFromInterval(0, colors.length - 1);

    ref.colorBody.style.backgroundColor = colors[indexColor];
  }, 1000);

  ref.startButton.disabled = true;
}

function stopChangingBackgroundColor() {
  clearInterval(intervalId);

  intervalId = null;
  ref.startButton.disabled = false;
}
