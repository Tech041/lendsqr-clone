import AdvertisementSection from "../components/AdvertisementSection";
import ApiBuild from "../components/ApiBuild";
import Benefits from "../components/Benefits";
import CeoCard from "../components/CeoCard";
import Footer from "../components/Footer";
import GettingStarted from "../components/GettingStarted";
import Hero from "../components/Hero";
import Lenders from "../components/Lenders";
import LendianSection from "../components/LendianSection";
import LendingProcess from "../components/LendingProcess";
import LendingTeam from "../components/LendingTeam";
import Notice from "../components/Notice";
import TailoredSolutions from "../components/TailoredSolutions";

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
      <TailoredSolutions />
      <LendianSection />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default Home;
