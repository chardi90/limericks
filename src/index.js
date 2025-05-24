function publishLimerick(response) {
  let limerickElement = document.querySelector("#limerick");
  let limerick = response.data.answer;
  limerickElement.classList.remove("hidden");
  limerickElement.innerHTML = `<div class="generating">⏳ Generating your limerick...</div>`;

  limerickElement.innerHTML = "#limerick";
  new Typewriter(limerickElement.innerHTML, {
    strings: `${limerick}`,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateLimerick(input) {
  let apiKey = "a2t477eebb3f98daaa0d6cf85ob51907";
  let prompt = `Please compose a limerick using these key words: ${input}.`;
  let context =
    "You are a limerick poet in the style of Edward Lear, please follow the rhyme scheme (AABBA), the limerick meter, the humour and the 5 line structure to create a short and snappy limerick using one key words provided. Please generate a 5-line limerick, each line should be returned in <p></p> HTML format. Then add this line to the bottom <p>SheCodes AI</p> with class italic.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(publishLimerick);
}

function handleClick(event) {
  event.preventDefault();
  let generatorInput = document.querySelector("#generator-input");
  let inputValue = generatorInput.value;
  let limerickElement = document.querySelector("#limerick");
  limerickElement.classList.remove("hidden");
  limerickElement.innerHTML = "Generating your limerick...";

  generateLimerick(inputValue);
}

const icons = [
  "sports_kabaddi",
  "snowshoeing",
  "pregnant_woman",
  "pool",
  "sports_gymnastics",
  "raven",
  "pet_supplies",
];

const grid = document.getElementById("iconGrid");
const total = 200;

for (let i = 0; i < total; i++) {
  const span = document.createElement("span");
  span.textContent = icons[i % icons.length];
  span.classList.add("material-symbols-outlined");
  grid.appendChild(span);
}

let formElement = document.querySelector("#generator");
formElement.addEventListener("submit", handleClick);
