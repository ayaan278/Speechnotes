import React from 'react'

const VerticalMenu = () => {
  return (
    <div class="icon-bar">
          <button onclick="saveCache()">
              <span title="Save data on browser">
                  <i class="fa fa-floppy-o"></i>
              </span>
          </button>
          <button onclick="saveFile()">
              <span title="Download File as a text">
                  <i class="fa fa-download"></i>
              </span>
          </button>
          <button onclick="printDiv()">
              <span title="Print">
                  <i class="fa fa-print"></i>
              </span>
          </button>
          <button onclick="copyToClipboard()">
              <span title="Copy to Clipboard">
                  <i class="fa fa-clipboard"></i>
              </span>
          </button>
          <button onclick="clearAll()">
              <span title="Clear All">
                  <i class="fa fa-trash-o"></i>
          </span>
      </button><button onclick="">
              <span title="Information's">
                  <i class="fa fa-info-circle"></i>
              </span>
          </button>
    </div>
  )
}

export default VerticalMenu