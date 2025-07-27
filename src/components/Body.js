import React, { use, useEffect } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
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
    return <h1>You are offline, Please check your internet connection!!</h1>;
  }

  return ListofRes?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Food or Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-2"
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
          className="m-2"
          onClick={() => {
            const filteredData = ListofRes.filter((res) => res.rating >= 4.8);
            setfilteredRes(filteredData);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
