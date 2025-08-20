import { Clock, Users, Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    id: 1,
    title: "Kandy Cultural Tour",
    description: "Explore the cultural heart of Sri Lanka with temple visits, traditional shows, and scenic beauty.",
    image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "3 Days",
    groupSize: "2-15 People",
    rating: 4.8,
    highlights: ["Temple of the Tooth", "Royal Botanical Gardens", "Cultural Dance Show"]
  },
  {
    id: 2,
    title: "Ella Hill Country Adventure",
    description: "Experience breathtaking mountain views, tea plantations, and the famous Nine Arch Bridge.",
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "2 Days",
    groupSize: "2-12 People",
    rating: 4.9,
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Tea Factory Visit"]
  },
  {
    id: 3,
    title: "Galle Fort athal Tour",
    description: "Discover the colonial charm and maritime history of this UNESCO World Heritage site.",
    image: "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "1 Day",
    groupSize: "2-20 People",
    rating: 5.0,
    highlights: ["Galle Fort Walls", "Dutch Reformed Church", "Maritime Museum"]
  },
  {
    id: 4,
    title: "Galle Fort Heritage Tour",
    description: "Discover the colonial charm and maritime history of this UNESCO World Heritage site.",
    image: "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800",
    duration: "1 Day",
    groupSize: "2-20 People",
    rating: 4.7,
    highlights: ["Galle Fort Walls", "Dutch Reformed Church", "Maritime Museum"]
  }
];

const FeaturedPackages = () => {
  const navigate = useNavigate();

  const sendWhatsAppMessage = (pkgId: number) => {
    const phoneNumber = "94778403773"; // No "+" or spaces
    const message = `Hello, I would like more details about the travel package with ID: ${pkgId}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Travel Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Carefully crafted experiences that showcase the best of Sri Lanka. 
            We handle everything so you can focus on making memories.
          </p>
        </div>

        {/* Responsive grid */}
        <div className="grid gap-8 w-full grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-blue-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
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
                    <ul className="text-sm text-gray-600">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center mb-1">
                          <MapPin className="h-3 w-3 text-blue-600 mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Fixed button position */}
                <div className="flex items-center justify-center mt-auto">
                  <button
                    onClick={() => sendWhatsAppMessage(pkg.id)}
                    className="bg-blue-900 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                  >
                    For more details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages button */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/packages");
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
