var time = 5;
// Open a new window
var ansForm = window.open("");
ansForm.document.head.innerHTML = `<link rel="stylesheet" href="./Styles/adminPage.css"/>`;

// Function to generate a random index
const RandomNumber = () => {
  return Math.floor(Math.random() * JsonData.length);
};

document.getElementById("RandomButton").addEventListener("click", () => {
  const indexVal = RandomNumber();
  const toReplace = document.getElementById("Question");
  toReplace.innerText = JSON.stringify(JsonData[indexVal].GoogleAIDesc);

  //Copied from Stack Overflow because im stupid
  if (ansForm.document.readyState === "complete") {
    ansForm.document.body.innerHTML = `
            <h1>${JsonData[indexVal].Mainword}</h1>
            <p>Illegal word1: ${JsonData[indexVal].illegal1}</p>
            <p>Illegal word2: ${JsonData[indexVal].illegal2}</p>
            <p>Illegal word3: ${JsonData[indexVal].illegal3}</p>
            <p>Illegal word4: ${JsonData[indexVal].illegal4}</p>
          `;
  } else {
    ansForm.onload = () => {
      ansForm.document.body.innerHTML = `
              <h1>${JsonData[indexVal].Mainword}</h1>
              <p>Illegal word1: ${JsonData[indexVal].illegal1}</p>
              <p>Illegal word2: ${JsonData[indexVal].illegal2}</p>
              <p>Illegal word3: ${JsonData[indexVal].illegal3}</p>
              <p>Illegal word4: ${JsonData[indexVal].illegal4}</p>
            `;
    };
  }
  JsonData.splice(indexVal, 1);
});
