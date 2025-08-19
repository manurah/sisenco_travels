import Hero from '../components/Hero';
import FeaturedPackages from '../components/FeaturedPackages';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import TourHistory from '../components/TourHistory';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedPackages />
      <WhyChooseUs />
      <TourHistory />
      <Testimonials />
    </div>
  );
};

export default Home;