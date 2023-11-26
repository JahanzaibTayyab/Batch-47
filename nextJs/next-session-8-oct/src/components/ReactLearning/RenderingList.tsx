"use client";

import { useState } from "react";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const [check, setCheck] = useState("List");
  return (
    <>
      <ul className="list-decimal">
        {products.map((product) => (
          <li key={product.id} className="font-semibold">
            {product.title}
          </li>
        ))}
      </ul>
      <div>{check}</div>
    </>
  );
}
