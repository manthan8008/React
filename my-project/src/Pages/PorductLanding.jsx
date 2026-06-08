import { useParams } from "react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import products from "../Components/products";
import Navbar from "../Components/Navbar";
import { Heart, Share2, Truck, RefreshCw, Shield } from "lucide-react";

export default function ProductLanding() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center pt-40">
          <h1 className="text-3xl text-white">Product not Found</h1>
        </div>
      </div>
    );
  }

  // Generate related products (same category)
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const productImages = [product.image, product.image, product.image];

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* Main Product Section */}
      <div className="relative top-20 max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-square">
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={productImages[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-full backdrop-blur-md transition-all ${
                    isWishlisted
                      ? "bg-red-500/30 text-red-400"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-md"
                >
                  <Share2 size={20} />
                </motion.button>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((img, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-lg transition-all ${
                    selectedImage === index
                      ? "ring-2 ring-yellow-400 opacity-100"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Category & Title */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {product.title}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 pt-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? "text-yellow-400" : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400">(248 reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2 border-y border-gray-700 py-6">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-yellow-400">
                  {product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  $3,299
                </span>
                <span className="text-sm font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded">
                  Save 24%
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-gray-300 leading-relaxed">
                Exquisite {product.title.toLowerCase()} crafted with premium materials
                and exceptional attention to detail. Perfect for special occasions or
                everyday luxury. Each piece is uniquely designed to complement your style.
              </p>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Material</p>
                <p className="font-semibold mt-1">18K Gold</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Weight</p>
                <p className="font-semibold mt-1">12.5g</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Authenticity</p>
                <p className="font-semibold mt-1">Certified</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-sm text-gray-400">Warranty</p>
                <p className="font-semibold mt-1">Lifetime</p>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold">Quantity:</span>
                <div className="flex items-center border border-gray-700 rounded-lg">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-400 hover:text-white transition"
                  >
                    −
                  </motion.button>
                  <span className="px-6 py-2 text-center font-semibold min-w-16">
                    {quantity}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-400 hover:text-white transition"
                  >
                    +
                  </motion.button>
                </div>
              </div>

              {/* Buttons */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-4 rounded-lg transition-all text-lg shadow-lg shadow-yellow-400/30"
              >
                Add to Cart
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 rounded-lg transition-all border border-gray-700"
              >
                Buy Now
              </motion.button>
            </div>

            {/* Benefits */}
            <div className="space-y-3 border-t border-gray-700 pt-6">
              <div className="flex items-center gap-3">
                <Truck className="text-yellow-400" size={20} />
                <span className="text-sm">Free delivery on orders above $500</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw className="text-yellow-400" size={20} />
                <span className="text-sm">30-day returns & exchanges</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="text-yellow-400" size={20} />
                <span className="text-sm">Secure and authenticated products</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-gray-700 pt-16"
        >
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((review) => (
              <motion.div
                key={review}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: review * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">Verified Purchase</span>
                </div>
                <h4 className="font-semibold">Amazing Quality!</h4>
                <p className="text-gray-400 text-sm">
                  Absolutely stunning piece. The craftsmanship is exceptional and the
                  product exceeded my expectations.
                </p>
                <p className="text-xs text-gray-500">- Sarah M.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-gray-700 pt-16"
        >
          <h2 className="text-3xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.length > 0 ? (
              relatedProducts.map((prod, index) => (
                <motion.a
                  key={prod.id}
                  href={`/products/${prod.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-yellow-400/50 transition-all"
                >
                  <div className="overflow-hidden bg-gray-900 aspect-square">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold line-clamp-2">{prod.title}</h3>
                    <p className="text-yellow-400 font-bold">{prod.price}</p>
                  </div>
                </motion.a>
              ))
            ) : (
              <p className="text-gray-400">No related products found</p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

