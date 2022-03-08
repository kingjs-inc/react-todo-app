import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

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

  const handleEnd = (result) => {
    // result 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함됨
    console.log("result", result);

    // 목적지가 없으면(이벤트 취소) 이 함수를 종료
    if (!result.destination) return;

    // 리액트 불변성을 지켜ㅜㅈ기 위해 새로운 todoData 생성
    const newTodoData = todoData;

    // 1. 변경시키는 아이템을 배열에서 지워줌
    // 2. return 값으로 지워진 아이템을 잡아줌
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    // 원하는 자리에 reorderedItem을 insert 해줌
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
  };

  //   UI 부분 가져오기
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      className={`${
                        snapshot.isDragging ? "bg-gray-400" : "bg-gray=100"
                      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
                    >
                      <div className="items-center">
                        <input
                          type="checkbox"
                          defaultChecked={false}
                          onChange={() => handleCompleteChange(data.id)}
                        />
                      </div>
                      <span
                        className={data.completed ? "line-through" : undefined}
                      >
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
