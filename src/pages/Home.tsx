import AdvertisementSection from "../components/AdvertisementSection";
import ApiBuild from "../components/ApiBuild";
import Benefits from "../components/Benefits";
import CeoCard from "../components/CeoCard";
import Hero from "../components/Hero";
import Lenders from "../components/Lenders";
import LendingProcess from "../components/LendingProcess";
import LendingTeam from "../components/LendingTeam";
import Notice from "../components/Notice";

const Home = () => {
  return (
    <div className="pt-20  h-full w-full">
      <Hero />
      <AdvertisementSection />
      <LendingProcess />
      <CeoCard />
      <Benefits />
      <ApiBuild />
      <Notice />
      <Lenders />
      <LendingTeam />
    </div>
  );
};

export default Home;
