import JewelryCard from "./JewelryCard";

const items = [
  {
    title: "Diamond Ring",
    price: "$2,499",
    image: "../src/assets/hero1.jpg",
  },
  {
    title: "Gold Necklace",
    price: "$3,999",
    image: "../src/assets/hero1.jpg",
  },
  {
    title: "Luxury Earrings",
    price: "$1,799",
    image: "../src/assets/hero1.jpg",
  },
];

export default function Featured() {
  return (
    <section className="py-32 px-8 bg-gray-900">
      <h2 className="text-center text-5xl font-bold mb-16">
        Featured Collection
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <JewelryCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
