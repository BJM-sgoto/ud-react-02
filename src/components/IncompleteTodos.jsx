import React from "react";

const incompleteArea = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={incompleteArea}>
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(i)}>完了</button>
                <button onClick={() => onClickDelete(i)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
