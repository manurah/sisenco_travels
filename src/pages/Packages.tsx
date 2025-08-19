import { useState } from "react";
import { Clock, Users, Star, MapPin, Filter } from "lucide-react";

const allPackages = [
  {
    id: 1,
    title: "Kandy Cultural Tour",
    description:
      "Explore the cultural heart of Sri Lanka with temple visits, traditional shows, and scenic beauty.",
    image:
      "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "3 Days",
    groupSize: "2-15 People",
    rating: 4.8,
    category: "Cultural",
    highlights: [
      "Temple of the Tooth",
      "Royal Botanical Gardens",
      "Cultural Dance Show",
      "Kandy Lake",
    ],
  },
  {
    id: 2,
    title: "Ella Hill Country Adventure",
    description:
      "Experience breathtaking mountain views, tea plantations, and the famous Nine Arch Bridge.",
    image:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "2 Days",
    groupSize: "2-12 People",
    rating: 4.9,
    category: "Adventure",
    highlights: [
      "Nine Arch Bridge",
      "Little Adam's Peak",
      "Tea Factory Visit",
      "Ella Rock Hike",
    ],
  },
  {
    id: 3,
    title: "Galle Fort Heritage Tour",
    description:
      "Discover the colonial charm and maritime history of this UNESCO World Heritage site.",
    image:
      "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "1 Day",
    groupSize: "2-20 People",
    rating: 4.7,
    category: "Heritage",
    highlights: [
      "Galle Fort Walls",
      "Dutch Reformed Church",
      "Maritime Museum",
      "Lighthouse",
    ],
  },
  {
    id: 4,
    title: "Yala National Park Safari",
    description:
      "Wildlife adventure with the best chance to spot leopards and diverse fauna in their natural habitat.",
    image:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "2 Days",
    groupSize: "2-8 People",
    rating: 4.8,
    category: "Wildlife",
    highlights: ["Leopard Spotting", "Elephant Herds", "Bird Watching", "Jeep Safari"],
  },
  {
    id: 5,
    title: "Sigiriya Rock Fortress",
    description:
      "Climb the ancient rock fortress and explore the archaeological wonders of this UNESCO site.",
    image:
      "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "1 Day",
    groupSize: "2-15 People",
    rating: 4.9,
    category: "Heritage",
    highlights: [
      "Rock Fortress Climb",
      "Ancient Frescoes",
      "Water Gardens",
      "Museum Visit",
    ],
  },
  {
    id: 6,
    title: "Mirissa Whale Watching",
    description:
      "Unforgettable marine life encounters with blue whales and dolphins in the Indian Ocean.",
    image:
      "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "1 Day",
    groupSize: "2-25 People",
    rating: 4.7,
    category: "Marine",
    highlights: [
      "Blue Whale Watching",
      "Dolphin Encounters",
      "Boat Ride",
      "Coastal Views",
    ],
  },
  {
    id: 7,
    title: "Nuwara Eliya Tea Country",
    description:
      "Scenic hill country experience with tea plantation visits and colonial architecture.",
    image:
      "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "2 Days",
    groupSize: "2-12 People",
    rating: 4.6,
    category: "Scenic",
    highlights: ["Tea Plantation Tours", "Gregory Lake", "Horton Plains", "Colonial Buildings"],
  },
  {
    id: 8,
    title: "Anuradhapura Ancient City",
    description:
      "Journey through Sri Lanka's first capital and explore ancient Buddhist temples and ruins.",
    image:
      "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "1 Day",
    groupSize: "2-18 People",
    rating: 4.5,
    category: "Cultural",
    highlights: ["Sacred Bo Tree", "Ancient Dagobas", "Ruins Exploration", "Archaeological Museum"],
  },
];

const categories = ["All", "Cultural", "Adventure", "Heritage", "Wildlife", "Marine", "Scenic"];

const Packages = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPackages =
    selectedCategory === "All"
      ? allPackages
      : allPackages.filter((pkg) => pkg.category === selectedCategory);

  const handleCategoryFilter = (category: string) => setSelectedCategory(category);

  const handleWhatsAppMessage = (pkgTitle: string) => {
    const phone = "+94778403773";
    const message = `Hello Sisenco Travels! I want more details about Tour ${pkgTitle}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section (full width, responsive) */}
      <div className="relative w-full text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-900" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        />
        <div className="relative w-full text-center px-4 sm:px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 block text-yellow-400">Our Travel Packages</h1>
          <p className="text-xl md:text-2xl max-w-5xl mx-auto">
            Discover Sri Lanka's beauty with our carefully crafted tour packages. We handle
            everything so you can focus on making memories.
          </p>
        </div>
      </div>

      {/* Filter Section (full width) */}
      <div className="w-full py-8 bg-white shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "All" ? "All Packages" : `${selectedCategory} Tours`}
            </h2>
            <div className="flex items-center text-gray-600">
              <Filter className="h-5 w-5 mr-2" />
              <span>{filteredPackages.length} packages found</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Packages Grid (full width, cards fixed size) */}
      <div className="w-full py-12">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-11">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col w-96"
              >
                <div className="relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{pkg.rating}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {pkg.groupSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {pkg.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-3 w-3 text-blue-600 mr-1 flex-shrink-0" />
                          <span className="truncate">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex justify-center">
                    <button
                      onClick={() => handleWhatsAppMessage(pkg.title)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                    >
                      For more details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section (full width) */}
      <div className="w-full py-16 bg-blue-600 text-white">
        <div className="w-full px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            We specialize in creating custom travel experiences tailored to your preferences. Let us
            design the perfect trip just for you!
          </p>
          <button
            onClick={() =>
              window.open(
                "https://wa.me/+94778403773?text=Hello%20Sisenco%20Travels!%20I%20want%20to%20request%20a%20custom%20package.",
                "_blank"
              )
            }
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Request Custom Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
