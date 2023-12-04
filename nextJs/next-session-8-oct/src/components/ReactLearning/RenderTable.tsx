import React from "react";

type dataType = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};
type RenderTableProps = {
  data: dataType[];
  categoryName: string;
};

function RenderTable({ data, categoryName }: RenderTableProps) {
  return (
    <div>
      <p className="font-bold">{categoryName}</p>
      {data.map((fruit, index) => (
        <div key={index} className="flex -gap-5">
          {fruit.name} {fruit.price}
        </div>
      ))}
    </div>
  );
}

export default RenderTable;
