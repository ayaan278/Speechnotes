import React from 'react'

const Form = () => {
  return (
    <div class="ui-input-container" id="editor1" style="display: block">
        <label class="ui-form-input-container" >
          <textarea placeholder="Your input comes here!" class="ui-form-input" id="output" ></textarea>
          <span id="interim"></span>
        </label>

        <div class="alert " id="showAlert" role="alert">
        </div>
      </div>
  )
}

export default Form