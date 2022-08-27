import React from "react";

function Item(props) {
  const { value, onCheck } = props;

  const th = {
    width: "100px"
  }
  let d = new Date(Date.parse(props.value.created))
  let creatTime = d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()

  const handleChange = () => {
    onCheck(value);
  }

  return(
    <tr>
      <th style={th}>No. {props.index}</th>
      <td>
        <input
          type="checkbox"
          checked={value.done}
          onChange={handleChange}
        />
      </td>
      <td>{props.value.message}</td>
      <td>{creatTime}</td>
    </tr>
  )
}

export default Item