import React from "react";

const inputArea = {
  backgroundColor: "#c1ffffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};
export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabledFlg } = props;
  return (
    <div style={inputArea}>
      <input
        disabled={disabledFlg}
        placeholder="input TODO"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabledFlg} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
