const ws = new WebSocket("wss://your-render-app.onrender.com");

ws.onopen = () => {
  console.log("WebSocket opened in the browser");
  ws.send("Client Successfully Connected");
};

ws.onmessage = (message) => {
  console.log(`Message received: ${message.data}`);

  if (message.data === "Granted") {
    // Ensure `newwindow` is properly initialized and used
    globalThis.newwindow = window.open("", "_blank");
    if (newwindow) {
      newwindow.document.write(
        "<link rel='stylesheet' href='./Styles/adminPage.css' /> <div id='WordDefinitions'></div>"
      );
    } else {
      console.error("Failed to open a new window");
    }
  } else if (message.data === "Connected") {
    document.getElementById("Connection-Status").innerHTML = "Connected";
  }
};

ws.onerror = (error) => {
  console.error("WebSocket error observed:", error);
};

ws.onclose = () => {
  console.log("WebSocket connection closed");
};

function SendPass() {
  const adminAccessValue = document.getElementById("AdminAccess").value;
  if (adminAccessValue) {
    ws.send(adminAccessValue);
  } else {
    console.error("Admin Access field is empty");
  }
}
3;
