import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Shimmer = () => {
  return (
    <>
      <div className="col-6 col-md-3 col-lg-3">
        <div className="card h-100">
          <Skeleton height={150}></Skeleton>
          <div className="card-body">
            <h4 className="card-title">
              <Skeleton height={30}></Skeleton>
            </h4>
            <h6 className="card-subtitle mb-2 text-muted">
              <Skeleton height={30}></Skeleton>
            </h6>
            <h5>
              <Skeleton height={30}></Skeleton>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
export default Shimmer;
