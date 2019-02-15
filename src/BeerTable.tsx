import React from "react";

import BeerRecipe from "./BeerRecipe";

interface IBeerTableRowProps {
  beerRecipe: BeerRecipe;
}

const BeerTableRow = (props: IBeerTableRowProps) => {
  const {
    beerRecipe: { name, ibu, contributed_by }
  } = props;

  return (
    <tr className="BeerRow">
      <td>{name}</td>
      <td>{ibu}</td>
      <td>{contributed_by}</td>
    </tr>
  );
};

// https://api.punkapi.com/v2/beers?page=1&per_page=10

interface IBeerTableProps {
  beerRecipes: BeerRecipe[];
}

const BeerTable = (props: IBeerTableProps) => {
  const { beerRecipes } = props;

  const rows = beerRecipes.map(beerRecipe => (
    <BeerTableRow key={beerRecipe.name} beerRecipe={beerRecipe} />
  ));

  return (
    <div className="BeerTable">
      <h4 className="title is-4">Recipes</h4>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>IBU</th>
            <th>Contributed by</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default BeerTable;
