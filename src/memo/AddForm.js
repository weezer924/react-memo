import React, { useState } from "react";

function AddForm (props) {
  const [message, setMessage] = useState('')

  const doChange = (e) => {
    setMessage(e.target.value)
  }

  const doAction = (e) => {
    props.onAdd(message);
    setMessage('')
  }

  return (
    <form onSubmit={doAction} action="">
      <div className="form-group row">
        <input type="text" className="form-control-sm col" onChange={doChange} value={message} required />
        <input type="submit" value="追加" className="btn btn-primary btn-sm col-2" />
      </div>
    </form>
  )
}

export default AddForm