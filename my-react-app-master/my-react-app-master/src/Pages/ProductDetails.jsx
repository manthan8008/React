import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "./Products";



function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md"
      />

      <h1 className="text-4xl font-bold mt-4">
        {product.name}
      </h1>

      <p className="text-2xl mt-2">
        ₹{product.price}
      </p>

      <p className="mt-4">
        {product.description}
      </p>
    </div>
  );
}

export default ProductDetails;