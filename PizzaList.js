import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Toppings</th>
          <th>Vegetarian</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </tbody>
    </table>
  );
}

export default PizzaList;