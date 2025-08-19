import { ArrowRight, Star, Users, MapPin, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate(); // hook for navigation

  return (
    <div className="relative w-full h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      {/* Overlay layers */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      
      {/* Content */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-6 sm:px-12 lg:px-20 text-center">
        <h1 className="w-full text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Amazing
          <span className="block text-yellow-400">Travel Experiences</span>
        </h1>

        <p className="w-full text-xl md:text-2xl mb-8 leading-relaxed">
          Let Sisenco Travels handle everything while you create unforgettable memories. 
          We take full responsibility for your perfect journey.
        </p>
        
        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => navigate('/packages')}
            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
            Explore Our Packages
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button 
            onClick={() => navigate('/contact')}  // 👈 navigate to Contact page
            className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-blue-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          <div className="text-center w-full">
            <div className="flex items-center justify-center mb-2">
              <Users className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-3xl font-bold">100+</span>
            </div>
            <p className="text-lg">Happy Travelers</p>
          </div>
          <div className="text-center w-full">
            <div className="flex items-center justify-center mb-2">
              <MapPin className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-3xl font-bold">50+</span>
            </div>
            <p className="text-lg">Destinations</p>
          </div>
          <div className="text-center w-full">
            <div className="flex items-center justify-center mb-2">
              <Star className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-3xl font-bold">4.9</span>
            </div>
            <p className="text-lg">Average Rating</p>
          </div>
          <div className="text-center w-full">
            <div className="flex items-center justify-center mb-2">
              <Award className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="text-3xl font-bold">5</span>
            </div>
            <p className="text-lg">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
