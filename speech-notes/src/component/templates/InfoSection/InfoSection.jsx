import React from 'react'

const InfoSection = () => {
  return (
    <div class="info-section" id="info">
    <h3>
      <i class="fa fa-info-circle"></i>
      Information
    </h3>
    <div>
      <a>
        Speech Recognition offers users some functions to reduce their efforts
      </a>

      <i class="fa fa-floppy-o fa-2x" ></i>
      <p>&emsp;Save the typed words in the browser cache.</p>

      <i class="fa fa-download fa-lg" ></i>
      <a>&emsp;Download you work as a Text file</a>

      <i class="fa fa-print fa-2x" ></i>
      <a>&emsp;Print your work </a>

      <i class="fa fa-clipboard fa-2x" ></i>
      <a>&emsp;Copy your work on clipboard</a>

      <i class="fa fa-trash-o fa-2x" ></i>
      <a>&emsp;Delete everything</a>

    </div>
    </div>
  )
}

export default InfoSection