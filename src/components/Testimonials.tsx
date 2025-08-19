import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Perera",
    location: "Colombo",
    rating: 5,
    text: "Sisenco Travels made our family trip absolutely perfect! They handled everything from accommodation to activities. The kids loved every moment, and we felt completely taken care of throughout the journey.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 2,
    name: "Rajesh Fernando",
    location: "Kandy",
    rating: 5,
    text: "Outstanding service! The team's local knowledge helped us discover places we never would have found on our own. Every detail was perfectly planned and executed. Highly recommended!",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 3,
    name: "Samanthi Silva",
    location: "Galle",
    rating: 5,
    text: "What an incredible experience! From the moment we contacted them until the end of our tour, everything was seamless. The guides were knowledgeable and friendly. Will definitely book again!",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    id: 4,
    name: "Nuwan Jayasinghe",
    location: "Negombo",
    rating: 5,
    text: "Sisenco Travels exceeded all our expectations. The attention to detail, the quality of accommodations, and the unique experiences they arranged made our anniversary trip truly special.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 w-full">
      {/* Header */}
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What Our Travelers Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers 
          have to say about their experiences with Sisenco Travels.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <div className="ml-auto">
                  <Quote className="h-8 w-8 text-blue-200" />
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center w-full px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Create Your Own Story?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Join hundreds of satisfied travelers who have trusted us with their dream vacations.
          </p>
          <button 
          onClick={() => window.open("https://wa.me/+94778403773?text=Hello%20Sisenco%20Travels!%20I%20want%20to%20request%20a%20custom%20package.", "_blank")}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
            Start Planning Your Trip
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
