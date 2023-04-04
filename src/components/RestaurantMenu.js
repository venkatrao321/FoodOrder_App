 
 import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_LOGO_URL } from "../constant";

function RestaurantMenu() {
    const {resId}=useParams();
    const [resturentinfo,setresturentinfo]=useState({});
useEffect(()=>{
  getRestaurantInfo()
},[])
  async function getRestaurantInfo() {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=87718")
      const data = await response.json();
      console.log(data.data?.cards[0]?.card?.card?.info)
      setresturentinfo(data.data?.cards[0]?.card?.card?.info)
    } catch (error) {
      console.log(error)
    }
 }
  return (
    <>
    <h1>Resturant id :{resId}</h1>
    <h2>{resturentinfo.name}</h2>
    <img src={Img_LOGO_URL + resturentinfo.cloudinaryImageId}></img>
    <h2>{resturentinfo.avgRating}</h2>
    <h2>{resturentinfo.city}</h2>
    <h2>{resturentinfo.areaName}</h2>
    </>
  )
}
export default RestaurantMenu;