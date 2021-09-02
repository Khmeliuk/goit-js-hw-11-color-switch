const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const stopButtomRef = document.querySelector('[data-action="stop"]');
const startButtomRef = document.querySelector('[data-action="start"]');
let timeId = null;

function onStopChangeColor() {
    clearInterval(timeId);
    startButtomRef.disabled = false;
}
function changeColor(){
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
   
}
function onStartChangeColor(e) {
startButtomRef.disabled = true;
 timeId = setInterval(changeColor, 1000);
}

startButtomRef.addEventListener('click', onStartChangeColor);
stopButtomRef.addEventListener('click', onStopChangeColor);