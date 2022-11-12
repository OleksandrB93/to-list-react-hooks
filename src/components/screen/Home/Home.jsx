// import React, { useState } from "react";
import TodoItem from "./Item/TodoItem";
import CreatedTodoField from "./CreatedTodoField/CreatedTodoField";
import useLocalStorage from "../../../hooks/useLocaleStorage";

const data = [
  {
    id: "asdfsd798",
    title: "Finish the essay collaboration",
    isCompleted: true,
  },
  {
    id: "asdfsd",
    title: "REad next chapter of the book",
    isCompleted: false,
  },
  { id: "asd798", title: "Send the finished assignment", isCompleted: true },
];

const Home = () => {
    const [todos, setTodos]=useLocalStorage("todos", data)

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };
  const removeTodo = (id) => setTodos([...todos].filter((t) => t.id !== id));

  return (
    <div className="text-white w-4/5 mx-auto ">
      <h1 className="text-2xl font-bold text-center mb-10 ">TO DO LIST</h1>
      <CreatedTodoField setTodos={setTodos} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
