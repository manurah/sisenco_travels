import { Users, Award, MapPin, Heart, Shield, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "100+" },
    { icon: MapPin, label: "Destinations", value: "50+" },
    { icon: Award, label: "Years Experience", value: "05+" },
    { icon: Heart, label: "Success Rate", value: "100%" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Complete Responsibility",
      description: "We take full ownership of your travel experience, ensuring every detail is perfectly managed."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction and safety are our top priorities in everything we do."
    },
    {
      icon: Clock,
      title: "Reliability",
      description: "Punctual, professional, and dependable service you can count on every time."
    }
  ];

  return (
    <div className="min-h-screen w-full">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 block text-yellow-400">About Sisenco Travels</h1>
          <p className="text-xl md:text-2xl max-w-5xl mx-auto ">
            Your trusted local travel partner, dedicated to creating unforgettable experiences 
            while taking complete responsibility for your journey.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div> 
      </div>

      {/* Our Story Section */}
      <div className="py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded with a passion for showcasing the beauty of Sri Lanka, Sisenco Travels 
                  has been creating memorable experiences for local and international travelers 
                  for over a decade.
                </p>
                <p>
                  What sets us apart is our commitment to taking complete responsibility for your 
                  travel experience. From the moment you contact us until you return home with 
                  beautiful memories, we handle every aspect of your journey.
                </p>
                <p>
                  Our deep local knowledge, combined with years of experience, allows us to offer 
                  unique insights and access to hidden gems that make your trip truly special. 
                  We believe that travel should be worry-free, allowing you to focus on what 
                  matters most - creating lasting memories.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sri Lankan landscape"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-16 bg-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              These core values guide everything we do and ensure that every traveler 
              receives the exceptional service they deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our experienced team of travel professionals is dedicated to making 
              your journey exceptional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Saman Perera</h3>
              <p className="text-blue-600 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With 15 years in the travel industry, Saman leads our team with passion 
                and expertise in creating unforgettable experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nisha Fernando</h3>
              <p className="text-blue-600 mb-3">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Nisha ensures every detail of your trip is perfectly coordinated, 
                bringing 10 years of operational excellence to our team.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <img 
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kasun Silva</h3>
              <p className="text-blue-600 mb-3">Senior Tour Guide</p>
              <p className="text-gray-600 text-sm">
                Kasun's deep knowledge of Sri Lankan culture and history brings 
                destinations to life with engaging stories and insights.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-blue-600 text-white w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Let us show you why hundreds of travelers trust Sisenco Travels with their 
            most important journeys. Your adventure awaits!
          </p>
          <button
            onClick={() => window.open("https://wa.me/+94778403773?text=Hello%20Sisenco%20Travels!%20I%20want%20to%20request%20a%20custom%20package.", "_blank")}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Start Planning Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
