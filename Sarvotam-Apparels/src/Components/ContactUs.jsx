import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", city: "" });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function sendEmail(e) {
    e.preventDefault();
    console.log("form submitted", formData);
  }

  return (
    <section className="custom-font" id="contactus">
      <motion.div className="flex justify-center w-full h-svh bg-[url(../src/assets/hero.jpg)] bg-cover">
        <motion.div
          initial={{ scale: 0.8, y: 15 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeout" }}
          className="w-[80%] bg-white h-auto min-h-[60%] origin-bottom my-auto flex md:flex-row flex-col"
        >
          <div className="w-[50%] h-full">
            <h1 className="pt-10 pl-10 md:text-7xl text-2xl">Contact Us</h1>
          </div>
          <form onSubmit={sendEmail}>
            <div className="w-[50%] h-full flex md:flex-row flex-wrap flex-col justify-items-center px-10 py-10 gap-10 md:text-2xl">
              <div>
                <h1>First name</h1>
                <input
                  type="text"
                  className="border-b-2"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h1>Last name</h1>
                <input
                  type="text"
                  className="border-b-2"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h1>Email</h1>
                <input
                  type="text"
                  className="border-b-2"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <h1>City</h1>
                <input
                  type="text"
                  className="border-b-2"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-span-2">
                <button className="border-2 px-2 py-2">Submit</button>
              </div>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
