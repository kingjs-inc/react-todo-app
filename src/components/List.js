import React from "react";

// Props로 필요한 데이터 함수 가져오기
export default function List({ todoData, setTodoData }) {
  //   인자를 ( props ) 로 받을 경우 아래처럼 사용할수도 있으나 직관적으로 사용하는것이 더 나음.
  // props.todoData;

  // 필요한 State 함수 가져오기
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    setTodoData(newTodoData);
  };

  //   UI 부분 가져오기
  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
            <div className="items-center">
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => handleCompleteChange(data.id)}
              />
            </div>
            <span className={data.completed ? "line-through" : undefined}>
              {data.title}
            </span>
            <div className="items-center">
              <button
                className="px-4 py-2 float-right"
                onClick={() => handleClick(data.id)}
              >
                x
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
