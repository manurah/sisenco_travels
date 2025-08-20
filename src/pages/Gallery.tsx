import { useState } from 'react';
import { MapPin, Calendar, Users, } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Sigiriya Rock Fortress",
    location: "Sigiriya",
    category: "Heritage",
    date: "March 2024",
    participants: 12,
    description: "Ancient rock fortress with stunning frescoes and panoramic views"
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Nine Arch Bridge",
    location: "Ella",
    category: "Scenic",
    date: "February 2024",
    participants: 8,
    description: "Iconic railway bridge surrounded by lush tea plantations"
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Galle Fort",
    location: "Galle",
    category: "Heritage",
    date: "January 2024",
    participants: 15,
    description: "UNESCO World Heritage colonial fortress by the sea"
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Yala Safari",
    location: "Yala National Park",
    category: "Wildlife",
    date: "December 2023",
    participants: 6,
    description: "Leopard spotting and wildlife adventure in natural habitat"
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Temple of the Tooth",
    location: "Kandy",
    category: "Cultural",
    date: "November 2023",
    participants: 20,
    description: "Sacred Buddhist temple housing the tooth relic of Buddha"
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Tea Plantation",
    location: "Nuwara Eliya",
    category: "Scenic",
    date: "October 2023",
    participants: 10,
    description: "Rolling hills of emerald tea gardens in the hill country"
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Whale Watching",
    location: "Mirissa",
    category: "Marine",
    date: "September 2023",
    participants: 25,
    description: "Blue whale encounters in the Indian Ocean waters"
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Anuradhapura",
    location: "Anuradhapura",
    category: "Heritage",
    date: "August 2023",
    participants: 14,
    description: "Ancient capital with sacred Buddhist monuments and ruins"
  },
  {
    id: 9,
    src: "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Adam's Peak",
    location: "Ratnapura",
    category: "Adventure",
    date: "July 2023",
    participants: 8,
    description: "Sacred mountain pilgrimage with breathtaking sunrise views"
  },
  {
    id: 10,
    src: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Horton Plains",
    location: "Nuwara Eliya",
    category: "Adventure",
    date: "June 2023",
    participants: 12,
    description: "World's End cliff with spectacular views and unique ecosystem"
  },
  {
    id: 11,
    src: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Dambulla Cave Temple",
    location: "Dambulla",
    category: "Cultural",
    date: "May 2023",
    participants: 18,
    description: "Ancient cave temple complex with stunning Buddha statues"
  },
  {
    id: 12,
    src: "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Bentota Beach",
    location: "Bentota",
    category: "Marine",
    date: "April 2023",
    participants: 16,
    description: "Golden sandy beaches with crystal clear waters and water sports"
  }
];

const categories = ["All", "Heritage", "Scenic", "Wildlife", "Cultural", "Marine", "Adventure"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleCardClick = (imageId: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(imageId)) {
        newSet.delete(imageId);
      } else {
        newSet.add(imageId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-60 w-full">
      {/* Hero Section */}
      <div className="relative w-full text-white py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 block text-yellow-400">Our Travel Gallery</h1>
          <p className="text-xl md:text-2xl max-w-5xl mx-auto ">
            Explore breathtaking moments and unforgettable experiences. Click on any image
            to discover more details about each destination.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="py-8 bg-white shadow-sm w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "All" ? "All Photos" : `${selectedCategory} Photos`}
            </h2>
            <div className="text-gray-600 mt-2 sm:mt-0">
              {filteredImages.length} photos
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white'
                    : 'bg-blue-400 text-white hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-12 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {filteredImages.map((image) => (
              <div 
                key={image.id}
                className="flip-card h-96 cursor-pointer"
                onClick={() => handleCardClick(image.id)}
              >
                <div className={`flip-card-inner h-full ${flippedCards.has(image.id) ? 'flipped' : ''}`}>
                  {/* Front Side - Image */}
                  <div className="flip-card-front">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute top-4 right-4 bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </div>
                  </div>
                  
                  {/* Back Side - Description */}
                  <div className="flip-card-back bg-blue-900 text-white p-6 rounded-lg shadow-lg flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-3 text-center text-yellow-400">{image.title}</h3>
                    <p className="text-white mb-4 text-center leading-relaxed">{image.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {image.location}
                      </div>
                      <div className="flex items-center justify-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {image.date}
                      </div>
                      <div className="flex items-center justify-center">
                        <Users className="h-4 w-4 mr-2" />
                        {image.participants} participants
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-900 text-white w-full">
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Be Part of Our Next Gallery?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Join us on our upcoming tours and create your own unforgettable memories. 
            Your adventure story could be featured in our next gallery update!
          </p>
          <button 
          onClick={() => window.open("https://wa.me/+94778403773?text=Hello%20Sisenco%20Travels!%20I%20want%20to%20request%20a%20custom%20package.", "_blank")}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
            Book Your Adventure
          </button>
        </div>
      </div>

      <style>{`
        .flip-card {
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;       /* ✅ make both absolute */
          top: 0;                   /* ✅ anchor them */
          left: 0;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.5rem;     /* keep corners rounded */
          overflow: hidden;         /* keep content contained */
        }

        .flip-card-front {
          transform: rotateY(0deg);
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default Gallery;
