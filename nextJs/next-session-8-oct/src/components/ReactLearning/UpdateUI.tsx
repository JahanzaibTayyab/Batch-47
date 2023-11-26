"use client";
import { useState } from "react";

export const UpdateUI = () => {
  const [value, setValue] = useState<number>(0);

  console.log("🚀 ~ file: UpdateUI.tsx:5 ~ UpdateUI ~ value:", value);

  const increment = () => {
    // value = value + 1;
    setValue(value + 1);
    console.log("🚀 ~ file: UpdateUI.tsx:5 ~ increment ~ value:", value);
  };

  const decrement = () => {
    setValue(value - 1);
    console.log("🚀 ~ file: UpdateUI.tsx:5 ~ decrement ~ value:", value);
  };

  return (
    <div className="flex gap-5">
      <button className="bg-blue-400 p-2 rounded-md" onClick={increment}>
        Increment
      </button>
      <p className="font-bold text-green-500 px-5">{value}</p>
      <button className="bg-red-400 p-2 rounded-md" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};
