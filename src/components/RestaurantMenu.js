import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  const {
    name,
    cuisine,
    caloriesPerServing,
    ingredients,
    instructions,
    image,
  } = resMenu;
  console.log("res", resMenu);

  return (
    <>
      {resMenu?.length < 0 ? (
        <Shimmer />
      ) : (
        <div>
          <h1>{name}</h1>
          <img src={image} style={{ width: "100px", height: "100px" }} />
          <h2>{cuisine}</h2>
          <h3>
            {caloriesPerServing}-{ingredients?.join(",")}
          </h3>
          <ul>
            {instructions?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
