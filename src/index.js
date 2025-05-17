function publishLimerick(response) {
  let limerickElement = document.querySelector("#limerick");
  let limerick = response.data.answer;

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
    "You are a limerick poet in the style of Edward Lear, please follow the rhyme scheme (AABBA), the limerick meter, the humour and the 5 line structure to create a fabulous limerick using one key words provided. Please generate a 5-line limerick, each line should be returned in <p></p> HTML format. ";
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
