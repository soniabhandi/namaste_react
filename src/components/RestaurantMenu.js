import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    resApi();
  }, []);

  const resApi = async () => {
    const fetchData = await fetch("https://dummyjson.com/recipes");
    const json = await fetchData.json();
    console.log(json);
  };
  return (
    <>
      <div>
        <h1>Name of the Restaurant</h1>
        <h2>Cusinies</h2>
        <h3>Price for 3</h3>
      </div>
    </>
  );
};

export default RestaurantMenu;
