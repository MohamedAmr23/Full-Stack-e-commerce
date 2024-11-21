import Loading from "../components/Loading.jsx";
import useCategories from "../Hooks/useCategories.jsx";

const Categories = () => {
  const {data} = useCategories()
  return (
    <div className="container py-5 cursor-pointer">
      <h2 className="text-center mb-4">Categories</h2>
      {data?.data.data ? (
        <div className="row g-4">
          {data?.data.data.map((category, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="card-img-top"
                  style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{category.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
   
  );
};

export default Categories;
