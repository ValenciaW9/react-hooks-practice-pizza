import React from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useSAtate([]);


  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pizzas={pizas}/>
    </>
  );
}

export default App;
