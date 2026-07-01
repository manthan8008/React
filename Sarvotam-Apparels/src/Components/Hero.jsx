import { Parallax, Background } from "react-parallax";

export default function Hero() {
  return (
    <section className="w-full relative custom-font">
      <div className=" w-full">
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage="/src/assets/hero.png"
          bgImageAlt="the dog"
          strength={400}
          className="object-fill"
        >
          <div className="md:h-screen h-[70vh] object-fill" />
        </Parallax>
      </div>
      <div className="absolute top-1/3 md:ml-20 ml-10 md:w-[40%] h-auto w-auto">
        <h1 className="text-white md:text-8xl text-5xl  font-bold">
          Precision and Reliability Defined
        </h1>
        <p className="text-white md:text-2xl  pt-1 pl-1">Building Legacy</p>
        <p className="text-white md:text-2xl pl-1">Creating Art</p>
      </div>
    </section>
  );
}
