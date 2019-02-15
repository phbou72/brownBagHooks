import React from "react";

interface IBeerRowProps {
  name: string;
  ibu: string;
  contributed_by: string;
}

const BeerRow = (props: IBeerRowProps) => {
  const { name, ibu, contributed_by } = props;

  return (
    <tr className="BeerRow">
      <td>{name}</td>
      <td>{ibu}</td>
      <td>{contributed_by}</td>
    </tr>
  );
};

// https://api.punkapi.com/v2/beers?page=1&per_page=10

// TODO Props
const BeerTable = props => {
  const { beerRecipes } = props;
  const rows = beerRecipes.map(beer => <BeerRow key={beer.name} {...beer} />);

  return (
    <div className="BeerTable">
      <h4 className="title is-4">Recipes</h4>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>IBU</th>
            <th>Contributed by</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default BeerTable;
