function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#instructions");
  let apiKey = "ef7417d18a5fa20et4ba9o259132407e";
  let context =
    "You are a romantic poem expert and you love to write short poems. Your mission is to generate a four line poem in basic html and seperate each line with a <br />. Make sure to follow the user instructions below. Don't add quotes to the poem and don't show html code.";
  let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">🌻🌹🌸🪻Generating a poem about ${instructionsInput.value} 🌼🌷💐🌺</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
