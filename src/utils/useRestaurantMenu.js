import { useEffect, useState } from "react";

import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${MENU_URL}${resId}`);
    const json = await data.json();
    setResMenu(json);
  };
  return resMenu;
};

export default useRestaurantMenu;
