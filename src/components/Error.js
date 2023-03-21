import { Link, useRouteError } from "react-router-dom";
 
const Error = () => {
const error = useRouteError();
console.log(error);
 const {status,statusText}=error
  return (
    <>
      <div className="container position-relative error">
        <div className="notfound">
          <div className="notfound-404"></div>
          <h1>{status}</h1>
          <h2>Oops! Page {statusText}</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
          <Link to="/">Back to homepage</Link>
        </div>
      </div>
    </>
  );
};
export default Error;
