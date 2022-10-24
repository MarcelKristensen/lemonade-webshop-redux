import React from "react";
import Product from "../Pages/Product";
import "../Pages/Product.css";

const dummy_products = [
  {
    id: 1,
    img: "lemonade3.jpg",
    name: "Lemonade",
    description: "Quenches the thirst like no other for a fair price.",
    quantity: 385,
    price: 15,
  },
  {
    id: 2,
    img: "lemonade2.jpg",
    name: "Lemonade delight",
    description: "The most delightful lemonade across the world!",
    quantity: 0,
    price: 20,
  },
  {
    id: 3,
    img: "lemonade1.jpg",
    name: "Lemonade deluxe",
    description:
      "Lemonade made from the finest of lemons imported from lemonland",
    quantity: 247,
    price: 25,
  },
  {
    id: 4,
    img: "lemonade4.jpg",
    name: "Lemonade premium",
    description: "Made from the most exquisite and exotic lemons",
    quantity: 174,
    price: 30,
  },
  {
    id: 5,
    img: "lemonade5.jpg",
    name: "Le lemon de je nade",
    description:
      "Fabriqué à partir de vieux citrons moisis, mais vous ne le sauriez pas à moins de parler français",
    quantity: 12,
    price: 35,
  },
  {
    id: 6,
    img: "lemonade6.jpg",
    name: "Lemon",
    description: "It's literally just a lemon.",
    quantity: 856,
    price: 5,
  },
];

const Products = () => {
  return (
    <div>
      <section className="products__list">
        {dummy_products.map((product, index) => (
          <div key={index}>
            <Product
              id={product.id}
              img={product.img}
              name={product.name}
              description={product.description}
              quantity={product.quantity}
              price={product.price}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Products;
