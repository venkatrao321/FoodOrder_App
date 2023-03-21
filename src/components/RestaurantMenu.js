 
 import { useParams } from "react-router-dom";

function RestaurantMenu() {
    const {resId}=useParams();

  return (
    <>
    <h1>Resturant id :{resId}</h1>
    </>
  )
}
export default RestaurantMenu;