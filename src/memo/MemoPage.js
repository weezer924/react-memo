import React from "react";
import usePersist from "./Persist";

import AddForm from "./AddForm";
import Item from "./Item";


function MemoPage() {
  const [memo, setMemo] = usePersist("memo", []);

  const getKey = () => Math.random().toString(32).substring(2);

  // 入力値をtodos(配列)に設定
  const handleAdd = (message) => {
    const data = {
      key: getKey(),
      message: message,
      done: false,
      created: new Date()
    }
    memo.unshift(data)
    setMemo(memo)
  };

  const handleCheck = value => {
    const newMemo = memo.map(memo => {
      if (memo.key === value.key) {
        memo.done = !value.done;
      }
      return memo;
    });
    setMemo(newMemo);
  };

  let data = memo.map((value, key) =>
    <Item key={value.key} value={value} index={key + 1} onCheck={handleCheck} />
  );
  
  return (
    <div>
      <div className="alert alert-primary pb-0">
        <AddForm onAdd={handleAdd} />
      </div>
      <table className="table mt-4">
        <tbody>{data}</tbody>
      </table>
    </div>
  )
}

export default MemoPage