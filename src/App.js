import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/Lists";

export default function App() {
  console.log("App Component");
  //[ 첫번째 인수 - 변수 이름 , 두번째 인수 - State를 정하는 함수 ]
  const [todoData, setTodoData] = useState([]); //todoData를 바꿀때는 setTodoData로 useState를 이용해서 처음에는 [] 빈 배열로 state를 정의
  const [value, setValue] = useState(""); // value는 처음에 빈 스트링으로 정의

  // handleSubmit()은 처리하는 state들이 App.js에 있기때문에 Form으로 옮기지 않고, props로
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
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
        {/* <h1>Hello world!</h1> */}
        {/* List 컴포넌트에 Props 내려주기 */}
        <List todoData={todoData} setTodoData={setTodoData} />
        {/* Form 4. Form 컴포넌트에 props 내려주기 */}
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
