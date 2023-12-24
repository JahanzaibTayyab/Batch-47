"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect } from "react";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const [update, setUpdate] = useState(1);

  console.log("🚀 ~ file: page.tsx:9 ~ TodoApp ~ update:", update);

  useEffect(() => {
    // setTodo("Use Effect");
    console.log("Use Effect");
    console.log(update);
  }, [update]);

  const addTodo = () => {
    // console.log("Add Todo");
    // setUpdate(100);
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (index: number) => {
    const updateTodo = [...todos];
    updateTodo.splice(index, 1);
    setTodos(updateTodo);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Title"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>
      <div className="mt-10">
        {todos.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 py-2 justify-center items-center"
          >
            <p>{item}</p>
            <Button variant={"destructive"} onClick={() => deleteTodo(index)}>
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
