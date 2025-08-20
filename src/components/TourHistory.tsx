import { Calendar, Users, Star } from 'lucide-react';

const tourHistory = [
  {
    id: 1,
    title: "Sigiriya & Dambulla Ancient Wonders",
    date: "March 2024",
    participants: 12,
    image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    description: "An incredible journey through Sri Lanka's ancient heritage sites."
  },
  {
    id: 2,
    title: "Yala National Park Safari",
    date: "February 2024",
    participants: 8,
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    description: "Wildlife adventure with leopard sightings and diverse fauna."
  },
  {
    id: 3,
    title: "Nuwara Eliya Tea Country Tour",
    date: "January 2024",
    participants: 15,
    image: "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    description: "Scenic hill country experience with tea plantation visits."
  },
  {
    id: 4,
    title: "Mirissa Whale Watching",
    date: "December 2023",
    participants: 20,
    image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    description: "Unforgettable marine life encounters in the Indian Ocean."
  }
];

const TourHistory = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Tour History
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Take a look at some of our recent successful tours and the amazing experiences 
            we've created for our travelers.
          </p>
        </div>

        {/* Tour cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tourHistory.map((tour) => (
            <div 
              key={tour.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row h-64"
            >
              {/* Image */}
              <div className="md:w-1/3 h-full">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="bg-blue-200 md:w-2/3 p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {tour.date}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-semibold">{tour.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                </div>

                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{tour.participants} participants</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourHistory;
