import { Img_LOGO_URL } from "../constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="col-6 col-md-3 col-lg-3">
      <div className="card h-100">
        <img
          src={`${Img_LOGO_URL}${cloudinaryImageId}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">
            {cuisines.join(", ")}
          </h6>
          <h5>{lastMileTravelString}</h5>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
