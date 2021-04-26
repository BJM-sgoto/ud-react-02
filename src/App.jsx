import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickComplete = (i) => {
    const newInCompleteTodos = [...incompleteTodos];
    newInCompleteTodos.splice(i, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
    setIncompleteTodos(newInCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickDelete = (i) => {
    const newTodos = [...incompleteTodos];
    // list.shift→先頭要素削除
    // list.pop→末尾要素削除
    // list.splice(i, j)→配列の i 番目から j だけ削除する
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickBack = (i) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);
    const newInCompleteTodos = [...incompleteTodos, completeTodos[i]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newInCompleteTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="input TODO"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, i) => {
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
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          {completeTodos.map((todo, i) => {
            return (
              <li key={i}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickBack(i)}>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
