export default function Gallery() {
  const arrImage = [
    "../src/assets/1.jpg",
    "../src/assets/2.jpg",
    "../src/assets/3.jpg",
    "../src/assets/4.jpg",
    "../src/assets/5.jpg",
    "../src/assets/6.jpg",
    "../src/assets/7.jpg",
    "../src/assets/8.jpg",
    "../src/assets/9.jpg",
    "../src/assets/10.jpg",
  ];
  return (
    <>
      <div className="flex justify-center items-center h-25 py-25 text-4xl md:text-7xl font-bold">
        Gallery
      </div>
      <div className=" bg-white whitespace-nowrap items-center overflow-scroll flex flex-nowrap gap-10 pb-25 px-10">
        {arrImage.map((x) => (
          <div className="h-100 w-75  shrink-0">
            <img className="object-cover h-full rounded-3xl" src={x} />
          </div>
        ))}
      </div>
    </>
  );
}
