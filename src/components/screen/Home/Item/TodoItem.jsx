import React from "react";
import Checkbox from "./Checkbox";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl bg-gray-700 p-5 w-full ">
      <button className="flex item-center" onClick={() => changeTodo(todo.id)}>
        <Checkbox isCompleted={todo.isCompleted} />
        <span
          className={cn({
            "line-through": todo.isCompleted,
          })}
        >
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash
          size={24}
          className="text-stone-400 hover:text-red-500 transition-colors ease-in-out duration-300"
        />
      </button>
    </div>
  );
};

export default TodoItem;



