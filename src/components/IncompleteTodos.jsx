import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
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
