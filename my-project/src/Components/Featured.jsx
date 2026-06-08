import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import products from "./products";
import { Link } from "react-router";

export default function Featured() {
  return (
    <div className="bg-black h-auto flex justify-center">
      <div className="py-10 flex flex-wrap px-10  gap-10">
        <Link to={`/products/${products[0].id}`}>
          <ProductCard key={products.id} product={products[0]} />
        </Link>
      </div>
    </div>
  );
}
