import Loading from "../components/Loading.jsx";
import useBrands from "../Hooks/useBrands.jsx";

const Brands = () => {
  let {data} = useBrands()
  return (
    <div className="container py-5 cursor-pointer">
    <h2 className="text-center mb-4">Brands</h2>
    {data?.data.data.length > 0 ? (
      <div className="row g-4">
        {data?.data.data.map((brand, index) => (
          <div key={index} className="col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={brand.image}
                alt={brand.name}
                className="card-img-top"
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{brand.name}</h5>
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

export default Brands;
