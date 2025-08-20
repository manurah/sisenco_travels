import { Shield, Users, Clock, Award, HeartHandshake, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const features = [
  {
    icon: Shield,
    title: "Full Responsibility",
    description: "We handle every aspect of your journey - from planning to execution, ensuring a worry-free experience."
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Our deep local knowledge helps you discover hidden gems and authentic experiences."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey for complete peace of mind."
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Years of experience with hundreds of satisfied customers and excellent reviews."
  },
  {
    icon: HeartHandshake,
    title: "Personalized Service",
    description: "Tailored packages that match your preferences, budget, and travel style."
  },
  {
    icon: MapPin,
    title: "Best Destinations",
    description: "Carefully selected locations that showcase the beauty and culture of Sri Lanka."
  }
];

const WhyChooseUs = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-gray-50 py-16">
      {/* Full width container */}
      <div className="w-full px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Sisenco Travels?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're not just a travel agency - we're your trusted partner in creating unforgettable experiences with complete peace of mind.
          </p>
        </div>

        {/* Feature cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-200 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 w-full bg-blue-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Who Are we?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Want to know more about our story, vision, and the experiences we create for travelers? Discover more about us below.
          </p>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              navigate("/about")}}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Let's Know More
          </button>
        </div>
      </div>
    </section>
    
  );
};

export default WhyChooseUs;
