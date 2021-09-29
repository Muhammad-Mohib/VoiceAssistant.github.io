const talkBtn = document.getElementById("talkBtn");
const content = document.getElementById("content");

const tasks = ["I am opening YouTube"];

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = () => {
  console.log("Listening...");
};
recognition.onresult = (e) => {
  const current = e.resultIndex;

  const transcript = e.results[current][0].transcript;

  content.textContent = transcript;
  readOut(transcript);
};

talkBtn.addEventListener("click", () => {
  recognition.start();
});

const readOut = (message) => {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I am not able to understand";

  if (message.includes("YouTube")) {
    const finalText = tasks[Math.floor(Math.random()=tasks.length)];

    speech.text = finalText;
    window.open("https://youtube.com")
  }

  speech.volume = 1;
  speech.rate = 1.1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
