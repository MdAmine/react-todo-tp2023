import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <div className="container-page-found">
      <h1 className="pageNotFound">404 Not Found</h1>
      <p className="text-error">
        La page que vous recherchez n'a pas été trouvée.
      </p>
      <button className="btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default NotFound;
