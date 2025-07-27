import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState([]);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    resApi();
  }, []);

  const resApi = async () => {
    const fetchData = await fetch(`${MENU_URL}${resId}`);
    const json = await fetchData.json();
    setResMenu(json);
  };
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
