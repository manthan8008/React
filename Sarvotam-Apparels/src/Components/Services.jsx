import { motion } from "framer-motion";

export default function Services() {
  return (
    <section className="custom-font">
      <div className="flex justify-center px-6 py-20">
        <h2 className="text-4xl md:text-7xl font-bold">Services</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-6 md:px-10 pb-20 justify-items-center max-w-325 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-105 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
        >
          <img
            className="w-full h-72 object-cover"
            src="https://www.enzimas.in/images/services/dye-textile-industry.jpg"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Dyeing</h3>
            <p className="text-xl leading-8 wrap-break-words">
              We take rayon raw material and then dye it with different colours,
              which then can be used for making ladies wear.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-105 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl"
        >
          <img className="w-full h-72 object-cover" src="/printing.jpg" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Printing</h3>
            <p className="text-xl leading-8 wrap-break-words">
              Printing is a more complex process which requires a lot of
              precision and a lot more supervision. The final product can be
              used for more purporses than dyed fabric.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-105 bg-white  rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl"
        >
          <img className="w-full h-72 object-cover" src="/finish.jpg" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Finishing</h3>
            <p className="text-xl leading-8 wrap-break-words">
              After the fabric is dyed or printed, the final process is
              stretching it and ironing is to make it look presentable to the
              customer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
