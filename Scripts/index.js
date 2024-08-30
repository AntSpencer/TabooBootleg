// Open the display.html page and assign it to a variable
const wind = window.open("display.html");

var CurrentJson;
// Function to change JSON data and update the opened window
const ChangeJson = () => {
  wind.document.getElementById("hint-box1").classList.add("Hidden");
  wind.document.getElementById("hint-box2").classList.add("Hidden");
  wind.document.getElementById("hint-box3").classList.add("Hidden");
  wind.document.getElementById("hint-box4").classList.add("Hidden");
  const CurrentIndex = getRandInt();
  CurrentJson = JsonData[CurrentIndex];
  wind.document.getElementById("Phrase").innerText = CurrentJson.GoogleAIDesc;
  JsonData.splice(CurrentIndex, 1);
};

// Function to get a random integer based on the length of JsonData
const getRandInt = () => {
  return Math.floor(Math.random() * JsonData.length);
};

// Add event listener to the button in the main page correctly
document.getElementById("changebutton").addEventListener("click", ChangeJson);

// Add event listener to the hint button in the main page
document.getElementById("hintbutton1").addEventListener("click", () => {
  wind.document.getElementById("hint-box1").classList.remove("Hidden");
  wind.document.getElementById("hint1").innerText = CurrentJson.illegal1;
});
document.getElementById("hintbutton2").addEventListener("click", () => {
  wind.document.getElementById("hint-box2").classList.remove("Hidden");
  wind.document.getElementById("hint2").innerText = CurrentJson.illegal2;
});
document.getElementById("hintbutton3").addEventListener("click", () => {
  wind.document.getElementById("hint-box3").classList.remove("Hidden");

  wind.document.getElementById("hint3").innerText = CurrentJson.illegal3;
});
document.getElementById("hintbutton4").addEventListener("click", () => {
  wind.document.getElementById("hint-box4").classList.remove("Hidden");
  wind.document.getElementById("hint4").innerText = CurrentJson.illegal4;
});
document.getElementById("revealbutton").addEventListener("click", () => {
  wind.document.getElementById("hint-box1").classList.remove("Hidden");
  wind.document.getElementById("hint-box2").classList.remove("Hidden");
  wind.document.getElementById("hint-box3").classList.remove("Hidden");
  wind.document.getElementById("hint-box4").classList.remove("Hidden");
  wind.document.getElementById("hint1").innerText = CurrentJson.illegal1;
  wind.document.getElementById("hint2").innerText = CurrentJson.illegal2;
  wind.document.getElementById("hint3").innerText = CurrentJson.illegal3;
  wind.document.getElementById("hint4").innerText = CurrentJson.illegal4;
  wind.document.getElementById("Phrase").innerText = CurrentJson.Mainword;
});
wind.addEventListener("load", () => {
  ChangeJson();
});
window.onbeforeunload = () => {
  wind.close();
};
