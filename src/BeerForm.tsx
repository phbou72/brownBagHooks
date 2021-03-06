import React, { useState } from "react";

import { AddOneMethod } from "./useBeerRecipes";

interface IBeerFormProps {
  addOne: AddOneMethod;
}

const BeerForm = (props: IBeerFormProps) => {
  const { addOne } = props;

  const [name, setName] = useState("Brown Ale");
  const [ibu, setIbu] = useState(75);
  const [contributed_by, setContributedBy] = useState("Brown Ale");

  return (
    <div className="BeerForm">
      <h4 className="title is-4">Add new recipe</h4>

      <div className="field">
        <label className="label" htmlFor="name">
          Name
        </label>

        <div className="control">
          <input
            className="input"
            name="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="ibu">
          IBU
        </label>

        <div className="control">
          <input
            className="input"
            name="ibu"
            type="text"
            value={ibu}
            onChange={e => setIbu(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="contributed_by">
          Contributed by
        </label>

        <div className="control">
          <input
            className="input"
            name="contributed_by"
            type="text"
            value={contributed_by}
            onChange={e => setContributedBy(e.target.value)}
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button
            className="button is-link"
            onClick={_e => {
              addOne({
                ibu,
                name,
                contributed_by
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeerForm;
