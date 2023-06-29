document.addEventListener("DOMContentLoaded", function() {
  const chatLog = document.getElementById("chatLog");
  const userInput = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");

  function appendMessage(message, sender) {
    const entry = document.createElement("div");
    entry.classList.add("chat-entry", sender);
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerText = message;
    entry.appendChild(messageElement);
    chatLog.appendChild(entry);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function processUserInput() {
    const userMessage = userInput.value.trim();
    if (userMessage !== "") {
      appendMessage(userMessage, "user");
      userInput.value = "";
    }
  }

  sendBtn.addEventListener("click", processUserInput);
  userInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      processUserInput();
    }
  });
});
