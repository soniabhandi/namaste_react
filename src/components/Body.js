import React, { use, useEffect } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRes, setListofRes] = useState([]);
  const [filteredRes, setfilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiCall = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await apiCall.json();
    setListofRes(resList);
    setfilteredRes(resList);
    console.log(json);
  };

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
              res.data.name.toLowerCase().includes(searchText)
            );
            setfilteredRes(filtered);
          }}
        >
          Search
        </button>
        <button
          className="m-2"
          onClick={() => {
            let filteredData = ListofRes.filter(
              (res) => res.data.avgRating > 4
            );
            setListofRes(filteredData);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
