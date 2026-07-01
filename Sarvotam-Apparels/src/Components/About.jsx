export default function About() {
  return (
    <section
      className=" flex md:flex-row flex-col h-auto custom-font"
      id="aboutus"
    >
      <div className="top-0  md:w-[50%] bg-white my-10 mx-10">
        <h1 className="md:text-8xl  text-5xl py-2 font-bold">About Us</h1>
        <p className="md:text-3xl pt-10">
          We have been doing textile business for almost 40 years now. Going
          through many types of fabrics and dealing with different types of
          people, we have perfected the art of making good looking, good quality
          fabrics.
        </p>
      </div>
      <div className="md:w-[50%] md:h-200 bg-black">
        <img className="w-full md:h-200 object-cover" src="/aboutus.jpg" />
      </div>
    </section>
  );
}
