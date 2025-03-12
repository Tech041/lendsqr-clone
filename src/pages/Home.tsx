import AdvertisementSection from "../components/AdvertisementSection";
import Benefits from "../components/Benefits";
import CeoCard from "../components/CeoCard";
import Hero from "../components/Hero";
import LendingProcess from "../components/LendingProcess";

const Home = () => {
  return (
    <div className="pt-20  h-full w-full">
      <Hero />
      <AdvertisementSection />
      <LendingProcess />
      <CeoCard />
      <Benefits />
    </div>
  );
};

export default Home;
