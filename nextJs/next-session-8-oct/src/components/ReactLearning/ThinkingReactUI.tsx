import React from "react";
import RenderTable from "./RenderTable";

const data = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
function ThinkingReactUI() {
  const fruits = data.filter((item) => item.category == "Fruits");
  const vegetables = data.filter((item) => item.category == "Vegetables");
  return (
    <div>
      ThinkingReactUI
      <div>
        <RenderTable data={fruits} categoryName="Fruits" />
        <RenderTable data={vegetables} categoryName="Vegetables" />
        <RenderTable data={fruits} categoryName="Fruits1" />
        <RenderTable data={vegetables} categoryName="Vegetables2" />
        <RenderTable data={fruits} categoryName="Fruits2" />
        <RenderTable data={vegetables} categoryName="Vegetables3" />
        <RenderTable data={fruits} categoryName="Fruits4" />
        <RenderTable data={vegetables} categoryName="Vegetables5" />
        <RenderTable data={fruits} categoryName="Fruits6" />
        <RenderTable data={vegetables} categoryName="Vegetables7" />

        {/* <p className="font-bold">Fruits</p>
        {fruits.map((fruit, index) => (
          <div key={index} className="flex -gap-5">
            {fruit.name} {fruit.price}
          </div>
        ))}
        <p className="font-bold">Vegetables</p>
        {vegetables.map((fruit, index) => (
          <div key={index} className="flex -gap-5">
            {fruit.name} {fruit.price}
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default ThinkingReactUI;
