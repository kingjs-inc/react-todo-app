import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

export default function App() {
  //[ 첫번째 인수 - 변수 이름 , 두번째 인수 - State를 정하는 함수 ]
  const [todoData, setTodoData] = useState([]); //todoData를 바꿀때는 setTodoData로 useState를 이용해서 처음에는 [] 빈 배열로 state를 정의
  const [value, setValue] = useState(""); // value는 처음에 빈 스트링으로 정의

  const hadleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // form 안에 input을 전솔할 때 페이지 리로드 되는 걸 막아줌
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      // id는 unique한 값이어야 하므로
      id: Date.now(),
      title: value,
      completed: false,
    };

    // 원래 있던 할 일에 새로운 할 일 더해주기 - [ 기존 데이터를 넣어주고, 새로운 데이터를 업데이트해줌]
    setTodoData((prev) => [...prev, newTodo]); // Setter에서 이전 State를 가지고 오기 위해서는 인수에 함수를 이용해서 사용할 수 있음
    setValue(""); // 업데이트 후 빈칸으로
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        {/* List 컴포넌트에 Props 내려주기 */}
        <List todoData={todoData} setTodoData={setTodoData} />

        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="해야 할 일을 입력하세요."
            value={value}
            onChange={hadleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    </div>
  );
}
