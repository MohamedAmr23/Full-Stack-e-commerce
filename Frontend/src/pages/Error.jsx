import { useNavigate } from "react-router-dom";

const Error = ({ message = "Something went wrong!" }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-1 text-danger">Oops!</h1>
      <p className="lead">{message}</p>
      <img
        src="https://via.placeholder.com/400x250?text=Error"
        alt="Error"
        className="mb-4"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <button className="btn btn-primary mx-2 mb-2" onClick={handleGoBack}>
        Go Back
      </button>
      <button className="btn btn-secondary mx-2" onClick={() => navigate("/")}>
        Home Page
      </button>
    </div>
  );
};

export default Error;
