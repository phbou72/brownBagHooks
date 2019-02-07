import React, { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "setData":
      return { data: action.payload };
    case "add":
      return { data: [...state.data, ...action.payload] };
    case "addOne":
      return { data: [...state.data, action.payload] };
  }
}

const fetchData = async setData => {
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
    const [state, dispatch] = useReducer(reducer, {data: []});

  useEffect(() => {
      if (state.data.length > 0) {
          return;
      };
    fetchData(data => dispatch({ type: "add", payload: data }));
  });

  return {
    beerRecipes: state.data,
    add: data => dispatch({ type: "add", payload: data }),
    addOne: data => dispatch({ type: "addOne", payload: data })
  };
}
