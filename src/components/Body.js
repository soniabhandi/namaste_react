import React, { use, useEffect } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard, { withDifficultlyLevel } from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListofRes, setListofRes] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const online = useOnlineStatus();

  const DifficultyRestaurantCard = withDifficultlyLevel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiCall = await fetch("https://dummyjson.com/recipes");
    const json = await apiCall.json();
    setListofRes(json?.recipes);
    setfilteredRes(json?.recipes);
    console.log(json?.recipes);
  };

  if (online === false) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        You are offline, Please check your internet connection!!
      </h1>
    );
  }

  return ListofRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="filter flex flex-wrap justify-center">
      <div className="search m-4 p-4">
        <input
          type="text"
          placeholder="Search Food or Restaurant"
          className="searchBox border border-solid border-black p-2 w-60"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            let filtered = ListofRes.filter((res) =>
              res.name.toLowerCase().includes(searchText)
            );
            setfilteredRes(filtered);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
          onClick={() => {
            const filteredData = ListofRes.filter((res) => res.rating >= 4.8);
            setfilteredRes(filteredData);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRes.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
            {restaurant?.difficulty === "Medium" ? (
              <DifficultyRestaurantCard
                key={restaurant.id}
                resData={restaurant}
              />
            ) : (
              <RestaurantCard key={restaurant.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
