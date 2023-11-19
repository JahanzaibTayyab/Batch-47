/* eslint-disable react/no-unescaped-entities */
"use client";

function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return (
    <button onClick={handleClick} className="bg-red-500 rounded-lg py-2 px-5">
      I'm a button
    </button>
  );
}
export default MyButton;
