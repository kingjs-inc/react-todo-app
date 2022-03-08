import React, { useState } from "react";

const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];

const List = React.memo(
  ({
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    console.log("List Component");

    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(title);

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

    const handleEditChange = (e) => {
      setEditTitle(e.target.value);
    };

    const handleSubmit = () => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded">
            <form onSubmit={handleSubmit}>
              <input
                className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded"
                value={editTitle}
                onChange={handleEditChange}
              />
            </form>
            <div className="item-center">
              <button
                className="px-4 py-2 float-right"
                onClick={() => setIsEditing(false)}
              >
                x
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 float-right"
                type="submit"
              >
                수정완료
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={id}
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
              onChange={() => handleCompleteChange(id)}
            />
            {"  "}
            <span className={completed ? "line-through" : undefined}>
              {title}
            </span>
          </div>

          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => handleClick(id)}
            >
              x
            </button>
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(true)}
            >
              {" "}
              수정{" "}
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
