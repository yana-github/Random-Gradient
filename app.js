const root = document.querySelector("#app");

//отрисовка

let container = document.createElement("div");
container.classList = "container";

let startBtn = document.createElement("button");
startBtn.innerText = "Start";
startBtn.classList = "prime-btn";

//слушатели на кнопку Старт

startBtn.addEventListener("click", changeColors);
startBtn.addEventListener("click", addEndBtn);

let wrapColor = document.createElement("h3");

//получить рандомное число

let randomRGB = () => Math.floor(Math.random() * 255 + 1);

//cчетчик для проверки

let count = 0;

//сформировать градиент для стилизации

function linearGradient() {
  let colorStart = `rgba(${randomRGB()},${randomRGB()},${randomRGB()},0.5)`;
  let colorEnd = `rgba(${randomRGB()},${randomRGB()},${randomRGB()},0.5)`;

  return `linear-gradient(to right, ${colorStart}, ${colorEnd})`;
}
//применить градиент и подставить данные о нем

function changeColors() {
  startBtn.innerText = "Next";
  let gradient = linearGradient();
  container.style.setProperty("background", gradient);

  wrapColor.innerHTML = gradient;
}

//добавить кнопку для завершения

function addEndBtn() {
  if (count === 1) {
    return;
  } else {
    let endBtn = document.createElement("button");
    endBtn.innerText = "End";
    endBtn.classList = "prime-btn";

    container.append(endBtn);
    endBtn.addEventListener("click", resetAll);
    count++;
  }
}

//cбросить по кнопке стили и данные

function resetAll() {
  count = 0;
  container.style.background = "";
  container.innerHTML = "";
  container.append(startBtn);
  startBtn.innerText = "Start";
  container.append(wrapColor);
  wrapColor.innerHTML = "";
}

//вложенность элементов DOM

container.append(startBtn, wrapColor);
root.append(container);