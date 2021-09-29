const talkBtn = document.getElementById("talkBtn");
const content = document.getElementById("content");

const about = ["I am a voice assistant","I am a good voice assistant"];
const howIAm = ["I am good","I am quite good","I am cool"];
const likeMe = ["I have a girlfriend","I hate you","Yes"];

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
  console.log("Clicked!")
});

const readOut = (message) => {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I am not able to understand";

  if (message.includes('who are you')) {
    const finalText = about[Math.floor(Math.random()*about.length)];

    speech.text = finalText;
    // window.open("https://youtube.com")
  }
  else if (message.includes('open YouTube')) {
    speech.text = "Opening Youtube";
    window.open("https://youtube.com")
  }
  else if (message.includes('open Facebook')) {
    speech.text = "Opening Facebook";
    window.open("https://facebook.com")
  }
  else if (message.includes('open Google')) {
    speech.text = "Opening Google";
    window.open("https://google.com")
  }
  else if (message.includes('how are you')) {
    const finalText = howIAm[Math.floor(Math.random()*howIAm.length)];

    speech.text = finalText;
  }
  else if (message.includes('do you like me')) {
    const finalText = likeMe[Math.floor(Math.random()*likeMe.length)];

    speech.text = finalText;
  }
  else if (message.includes('what is the time')) {
    const finalText = new Date().toTimeString().split(" ")[0];;

    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1.1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};
