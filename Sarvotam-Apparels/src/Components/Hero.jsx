export default function Hero() {
  return (
    <section className="w-full relative custom-font">
      <div className="absolute bg-black/60 w-full md:h-dvh h-120"></div>
      <div className=" w-full">
        <img className="w-full bg-fixed md:h-screen h-120 bg-cover bg-[url(../src/assets/hero.jpg)]" />
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
