import RestaurantCard from "./RestaurantCard";
import { resturentData } from "../constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterdata(searchtext, restaurantslist) {
  let restrodata = restaurantslist;
  if (searchtext === "" || searchtext === " ") {
    return restrodata;
  } else
    restrodata = restaurantslist.filter((restro) => {
      return restro?.data?.name
        ?.toLowerCase()
        .includes(searchtext.toLowerCase());
    });
  return restrodata;
}
const Body = () => {
  let [searchText, setSearchtext] = useState("");
  let [filtredRestaurants, setFiltredRestaurants] = useState([]);
  let [allrestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      let response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1820475&lng=79.127872&page_type=DESKTOP_WEB_LISTING"
      );
      let jsonData = await response.json();
      console.log(jsonData);
      setAllRestaurants(jsonData.data?.cards[2]?.data?.data?.cards);
      setFiltredRestaurants(jsonData.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }
  return allrestaurants.length === 0 ? (
    <>
      <div className="container">
        <div className="row g-4 mt-4 justify-content-center">
          {resturentData.map((r, index) => {
            return <Shimmer key={index} />;
          })}
          <Shimmer></Shimmer>
        </div>
      </div>
    </>
  ) : (
    <main className="container">
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Restro"
          aria-label="Search restro"
          value={searchText}
          onChange={(e) => setSearchtext(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            const data = filterdata(searchText, allrestaurants);
            setFiltredRestaurants(data);
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="row g-4 mt-4 justify-content-center">
        {filtredRestaurants.map((resturent) => {
          return (
            <RestaurantCard
              {...resturent.data}
              key={resturent.data.id}
            ></RestaurantCard>
          );
        })}
      </div>
    </main>
  );
};
export default Body;
