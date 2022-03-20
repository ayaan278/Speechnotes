//----------------------------------------------------------------------------------------
let recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

let status = true;
function start() {
  recognition.onresult = (event) => {
    console.log(event);
    let interim_transcript = "";

    let output = document.getElementById("output");

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        output.innerHTML += event.results[i][0].transcript;
      } else {
        interim_transcript += event.results[i][0].transcript;
        document.querySelector("#interim").innerHTML = interim_transcript;
        interim_transcript =" ";
      }
    }
  }
  status = false;
  recognition.start();
}// end of speech to text function
//----------------------------------------------------------------------------------------
function pause() {
  status=true;
  recognition.stop();
}// end of pause function
//----------------------------------------------------------------------------------------



// let SpeechGrammarList = webkitSpeechGrammarList;
// var grammer = '#JSGF V1.0; grammer punctuations; public<punctuations> = period | comma | question mark | colon | semi colon;'
