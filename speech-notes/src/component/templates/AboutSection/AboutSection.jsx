import React from 'react'

const AboutSection = () => {
  return (
    <div class="aboutSection" id="about">
    <h2>About Speech Recognition</h2>
    <p>Speech Recognition is a website with online Notepad that allows it users to convert any audio to text. </p>
    <p>It uses webkitSpeechRecognition from Javascript to transcribe audio to text.</p>
    <p>For the first time only: Your browser will pop up a request for you to allow the site to listen to your mic. Click "Allow".</p>
    <p>In case if Speech Recognition is not working make sure you check following things.
      <p>
        The website only works on Google Chrome and Safari Browsers for now.
        You can use Mobile or PC for that.</p>
    </p>
  </div>
  )
}

export default AboutSection