function publishLimerick(response) {
  let limerickElement = document.querySelector("#limerick");
  let limerick = response.data.answer;

  limerickElement.innerHTML = `${limerick}`;
}

function generateLimerick(input) {
  let apiKey = "a2t477eebb3f98daaa0d6cf85ob51907";
  let prompt = `Compose a limerick using these key words: ${input}.`;
  let context =
    "You are a limerick poet like Edward Lear, please follow the standard limerick format to create a fabulous limerick using one key word in each line.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(publishLimerick);
}

function handleClick(event) {
  event.preventDefault();
  let generatorInput = document.querySelector("#generator-input");
  let inputValue = generatorInput.value;

  console.log(inputValue);
  generateLimerick(inputValue);
}

let formElement = document.querySelector("#generator");
formElement.addEventListener("submit", handleClick);
