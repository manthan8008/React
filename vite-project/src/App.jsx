import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="w-full bg-white flex justify-center custom-font">
        <nav className=" w-[90%] bg-white flex justify-between py-6 text-2xl">
          <div>
            <a href="#">SARVOTAM APPARELS</a>
          </div>
          <div>
            <ul className="flex gap-10">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </nav>
      </header>

      {/* hero section */}

      <section className="w-full relative custom-font">
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

      <section className=" flex md:flex-row flex-col h-auto custom-font">
        <div className="top-0  md:w-[50%] bg-white my-10 mx-10">
          <h1 className="md:text-8xl  text-5xl py-2 font-bold">About Us</h1>
          <p className="md:text-3xl pt-10">
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
      <section className="custom-font ">
        <div className="md:text-7xl px-40 py-20 text-4xl font-bold justify-center flex">
          Services
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 px-10 gap-10 pb-30 justify-center h-auto md:text-2xl">
          <div className="md:h-200 min-h-150 h-auto ">
            <img
              className="md:h-150 object-cover "
              src="https://static.wixstatic.com/media/71563fcab04c4db8853d2ea5ef555c30.jpg/v1/fill/w_533,h_614,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cutting%20Concrete%20Block.jpg"
            ></img>
            <h1 className=" py-10 pr-20">
              From concept to completion, we specialize in crafting new
              structures that reflect your unique vision and requirements,
              ensuring quality and attention to detail at every step.
            </h1>
          </div>

          <div className="md:h-200 ">
            <img
              className="md:h-150 object-cover"
              src="https://static.wixstatic.com/media/11062b_b86ae61bacd849438ab747e661d3a517~mv2.jpg/v1/crop/x_1323,y_0,w_1416,h_1632/fill/w_533,h_614,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Construction%20Site%20Discussion.jpg"
            ></img>
            <h1 className="py-10 pr-10">
              From concept to completion, we specialize in crafting new
              structures that reflect your unique vision and requirements,
              ensuring quality and attention to detail at every step.
            </h1>
          </div>

          <div className="md:h-200 ">
            <img
              className="md:h-150 object-cover"
              src="https://static.wixstatic.com/media/94607157159347a88fadb4e980d35049.jpg/v1/fill/w_533,h_614,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Construction%20Site%20Workers.jpg"
            ></img>
            <h1 className="py-10 pr-10">
              From concept to completion, we specialize in crafting new
              structures that reflect your unique vision and requirements,
              ensuring quality and attention to detail at every step.
            </h1>
          </div>
        </div>
      </section>

      {/* contact us */}

      <section className="custom-font">
        <div className="flex justify-center w-full h-svh bg-fixed bg-[url(https://static.wixstatic.com/media/11062b_8e5c4a60c46a462a8971a111f2a8a0c8~mv2.jpg/v1/fill/w_1905,h_997,fp_0.38_0.40,q_85,usm_0.66_1.00_0.01,enc_auto/Construction%20Site%20View.jpg)]">
          <div className="w-[80%] bg-white h-auto min-h-[60%] my-auto flex md:flex-row flex-col">
            <div className="w-[50%] h-full">
              <h1 className="pt-10 pl-10 md:text-7xl text-2xl">Contact Us</h1>
            </div>
            <div className="w-[50%] h-full flex md:flex-row flex-wrap flex-col justify-center items-center px-10 py-10 gap-10 md:text-2xl">
              <div>
                <h1>First name</h1>
                <input type="text" className="border-b-2"></input>
              </div>
              <div>
                <h1>Last name</h1>
                <input type="text" className="border-b-2"></input>
              </div>
              <div>
                <h1>Last name</h1>
                <input type="text" className="border-b-2"></input>
              </div>
              <div>
                <h1>Last name</h1>
                <input type="text" className="border-b-2"></input>
              </div>
              <div className="col-span-2">
                <button className="border-2 px-2 py-2">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
