import { useReducer, useEffect } from "react";

import BeerRecipe from "./BeerRecipe";

export interface IBeerRecipesState {
  beerRecipes: BeerRecipe[];
}

export type AddMethod = (beerRecipes: BeerRecipe[]) => void;
export type AddOneMethod = (beerRecipe: BeerRecipe) => void;

type SetDataAction = { type: "setData"; payload: BeerRecipe[] };
type AddAction = { type: "add"; payload: BeerRecipe[] };
type AddOneAction = { type: "addOne"; payload: BeerRecipe };

type IAction = SetDataAction | AddAction | AddOneAction;

function reducer(state: IBeerRecipesState, action: IAction) {
  switch (action.type) {
    case "setData":
      return { beerRecipes: action.payload };
    case "add":
      return { beerRecipes: [...state.beerRecipes, ...action.payload] };
    case "addOne":
      return { beerRecipes: [...state.beerRecipes, action.payload] };
  }
}

const fetchData = async (setData: (data: BeerRecipe[]) => void) => {
  try {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=1&per_page=10"
    );
    const json = await response.json();
    setData(json);
  } catch (e) {
    console.log(e);
  }
};

export default function useBeerRecipes() {
  const [state, dispatch] = useReducer(reducer, {
    beerRecipes: []
  });

  useEffect(() => {
    if (state.beerRecipes.length === 0) {
      fetchData((beerRecipes: BeerRecipe[]) =>
        dispatch({ type: "add", payload: beerRecipes })
      );
    }
  });

  return {
    beerRecipes: state.beerRecipes,
    add: (beerRecipes: BeerRecipe[]) =>
      dispatch({ type: "add", payload: beerRecipes }),
    addOne: (beerRecipe: BeerRecipe) =>
      dispatch({ type: "addOne", payload: beerRecipe })
  };
}
