import { useReducer, useEffect } from "react";

import BeerRecipe from "./BeerRecipe";

interface State {
  data: BeerRecipe[];
}

type SetDataAction = { type: "setData"; payload: BeerRecipe[] };
type AddAction = { type: "add"; payload: BeerRecipe[] };
type AddOneAction = { type: "addOne"; payload: BeerRecipe };

type IAction = SetDataAction | AddAction | AddOneAction;

function reducer(state: State, action: IAction) {
  switch (action.type) {
    case "setData":
      return { data: action.payload };
    case "add":
      return { data: [...state.data, ...action.payload] };
    case "addOne":
      return { data: [...state.data, action.payload] };
  }
}

const fetchData = async (
  setData: (data: BeerRecipe[]) => (action: IAction) => void
) => {
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
  const [state, dispatch] = useReducer(reducer, { data: [] });

  useEffect(() => {
    if (state.data.length > 0) {
      return;
    }
    fetchData((data: BeerRecipe[]) => dispatch({ type: "add", payload: data }));
  });

  return {
    beerRecipes: state.data,
    add: (data: BeerRecipe[]) => dispatch({ type: "add", payload: data }),
    addOne: (data: BeerRecipe[]) => dispatch({ type: "addOne", payload: data })
  };
}
