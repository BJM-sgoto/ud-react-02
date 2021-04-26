import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={i}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClick(i)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
