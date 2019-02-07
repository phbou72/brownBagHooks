import React from "react";
import useBeerRecipes from "./useBeerRecipes";

import BeerForm from "./BeerForm";
import BeerTable from "./BeerTable";

function Header() {
  return (
    <section className="hero">
      <div className="hero-body" style={{ paddingLeft: "0" }}>
        <div className="container">
          <h1 className="title">Brew Beer App</h1>
          <h2 className="subtitle">Let's brew something today!</h2>
        </div>
      </div>
    </section>
  );
}

function App() {
    const { beerRecipes, addOne } = useBeerRecipes();
    return (
        <div className="App container">
          <Header />

          <div className="columns">
            <div className="column">
                <BeerTable beerRecipes={beerRecipes} />
            </div>
            <div className="column">
                <BeerForm addOne={addOne} />
            </div>
          </div>
        </div>
    );
}

export default App;
