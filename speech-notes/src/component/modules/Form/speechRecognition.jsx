// //----------------------------------------------------------------------------------------
// let recognition = new webkitSpeechRecognition();
// recognition.continuous = true;
// recognition.interimResults = true;

// let status = false;

// function start() {
//   recognition.onresult = (event) => {
//     console.log(event);
//     let interim_transcript = "";

//     let output = document.getElementById("output");

//     for (let i = event.resultIndex; i < event.results.length; ++i) {
//       if (event.results[i].isFinal) {
//         output.innerHTML += event.results[i][0].transcript;
//       } else {
//         interim_transcript += event.results[i][0].transcript;
//         document.querySelector("#interim").innerHTML = interim_transcript;
//         interim_transcript =" ";
//       }
//     }
//   }
//   status = true;
//   recognition.start();
// }// end of speech to text function
// //----------------------------------------------------------------------------------------
// function pause() {
//   status=false;
//   recognition.stop();
// }// end of pause function
// //----------------------------------------------------------------------------------------
// function speech() {
//   if (status==true){
//     start()
//   } else if(status===false){
//     pause()}
// }
