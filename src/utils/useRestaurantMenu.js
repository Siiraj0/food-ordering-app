// utils/useRestaurantMenu.js
import { useEffect, useState } from "react";
import { MENU_API } from "./contants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${MENU_API}${resId}`);
        const json = await response.json();

        console.log("✅ API Response:", json);

        // If it's inside 'data', use json.data, else json directly
        setResInfo(json?.data || json);
      } catch (err) {
        console.error("❌ Error fetching menu:", err);
      }
    };

    if (resId) {
      fetchData();
    }
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
