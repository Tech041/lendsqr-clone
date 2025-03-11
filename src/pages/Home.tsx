import AdvertisementSection from "../components/AdvertisementSection";
import Hero from "../components/Hero";
import LendingProcess from "../components/LendingProcess";

const Home = () => {
  return (
    <div className="pt-20  h-full w-full">
      <Hero />
      <AdvertisementSection/>
      <LendingProcess />
    </div>
  );
};

export default Home;
