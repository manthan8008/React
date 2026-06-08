import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="w-full bg-white flex justify-center">
        <nav className=" w-[90%] bg-white flex space-between py-6 text-2xl">
          Sarvotam Apparels
        </nav>
      </header>

      {/* hero section */}

      <section className="w-full relative">
        <div className="absolute bg-black/60 w-full h-dvh"></div>
        <div className=" w-full">
          <img className="w-full bg-fixed h-dvh bg-[url(https://static.wixstatic.com/media/11062b_8e5c4a60c46a462a8971a111f2a8a0c8~mv2.jpg/v1/fill/w_1905,h_997,fp_0.38_0.40,q_85,usm_0.66_1.00_0.01,enc_auto/Construction%20Site%20View.jpg)]" />
        </div>
        <div className="absolute top-1/3 md:ml-20 ml-10 md:w-[40%] h-auto w-auto">
          <h1 className="text-white md:text-8xl text-5xl  font-bold">
            Precision and Reliability Defined
          </h1>
          <p className="text-white md:text-2xl  pt-1 pl-1">Building Dreams</p>
          <p className="text-white md:text-2xl pl-1">Creating Reality</p>
        </div>
      </section>

      {/* about us */}

      <section className=" flex md:flex-row flex-col h-auto">
        <div className="top-0  md:w-[50%] bg-white my-10 mx-10">
          <h1 className="text-8xl py-2">About Us</h1>
          <p className="text-3xl pt-10">
            At T. Lav & Nguyen, we bring your construction projects to life with
            a focus on precision and quality. Our commitment to excellence
            ensures that every structure we build reflects our dedication to
            craftsmanship and innovation.
          </p>
        </div>
        <div className="md:w-[50%] md:h-200 bg-black">
          <img
            className="w-full md:h-200 object-cover"
            src="https://static.wixstatic.com/media/11062b_a5394652afc0470390a39b9f6cc824a3~mv2.jpeg/v1/fill/w_904,h_1079,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Construction%20Site%20Workers.jpeg"
          />
        </div>
      </section>

      {/* services */}
      <section className="mt-10">
        <div className="text-5xl px-40">Services</div>
        <div className="grid grid-cols-3 gap-20 py-20 mx-auto px-40">
          <div className="h-200 ">
            <img
              className="h-150 object-cover"
              src="./src/assets/hero1.jpg"
            ></img>
            <h1 className="text-2xl py-10 pr-10">
              From concept to completion, we specialize in crafting new
              structures that reflect your unique vision and requirements,
              ensuring quality and attention to detail at every step.
            </h1>
          </div>
          <div className="h-150 bg-black">
            <div className="h-200 ">
              <img
                className="h-150 object-cover"
                src="./src/assets/hero1.jpg"
              ></img>
              <h1 className="text-2xl py-10 pr-10">
                From concept to completion, we specialize in crafting new
                structures that reflect your unique vision and requirements,
                ensuring quality and attention to detail at every step.
              </h1>
            </div>
          </div>
          <div className="h-150 bg-black">
            <div className="h-200 ">
              <img
                className="h-150 object-cover"
                src="./src/assets/hero1.jpg"
              ></img>
              <h1 className="text-2xl py-10 pr-10">
                From concept to completion, we specialize in crafting new
                structures that reflect your unique vision and requirements,
                ensuring quality and attention to detail at every step.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
