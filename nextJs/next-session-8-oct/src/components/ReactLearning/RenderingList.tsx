const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function ShoppingList() {
  return (
    <ul className="list-decimal">
      {products.map((product) => (
        <li key={product.id} className="font-semibold">
          {product.title}
        </li>
      ))}
    </ul>
  );
}
