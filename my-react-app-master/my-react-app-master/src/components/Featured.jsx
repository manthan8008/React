import JewelryCard from "./JewelryCard";

const items = [
  {
    title: "Diamond Ring",
    price: "$2,499",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
  {
    title: "Gold Necklace",
    price: "$3,999",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
  },
  {
    title: "Luxury Earrings",
    price: "$1,799",
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584",
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
