import { assets } from "../assets/assets";
import Container from "./Container";
import LendingTeamCard from "./LendingTeamCard";

const LendingTeam = () => {
  return (
    <section className="pt-14 bg-[#F5FCFF] pb-12">
      <Container>
        <div className="flex">
          <div className="flex-1 w-full lg:w-auto ">
            <h1 className=" text-3xl lg:text-4xl flex flex-wrap text-primary-200 font-semibold">
              Don't just take our word for it
            </h1>
            <h2 className="text-xl lg:text-2xl text-primary-300 flex flex-wrap pt-2">
              Hear what our lenders love about Lendsq
            </h2>
          </div>
          <div className="flex-1 hidden lg:block"></div>
        </div>
        {/* lending Team card */}
        <div className="">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 pt-5">
            <div className="flex-1">
              <LendingTeamCard
                src={assets.team_logo1}
                src2={assets.nigeria}
                src3={assets.team1_img}
                content="The Lendsqr support team is truly exceptional, and have been instrumental to KrediBank's success"
                name="Afolabi Abimbola"
                organization="Founder/CEO, Kredi MFB"
              />
            </div>
            <div className="flex-1">
              <LendingTeamCard
                src={assets.team_logo2}
                src2={assets.nigeria}
                src3={assets.team_img2}
                content="With Lendsqr we were able to launch in 20% of the time and at 1% of the cost it would have taken us to build our stack from scratch."
                name="Yomi Sule"
                organization="Founder/CEO, Paycient Finance"
              />
            </div>{" "}
            <div className="flex-1">
              <LendingTeamCard
                src={assets.logo3}
                src2={assets.gambia}
                src3={assets.img3}
                content="The Lendsqr team is always reliable and trustworthy, consistently putting the customer's best interests first."
                name="Oyegue Osazee"
                organization="Executive Director, Standard Life"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 pt-5 ">
            <div className="flex-1">
              <LendingTeamCard
                src={assets.logo4}
                src2={assets.nigeria}
                src3={assets.img4}
                content="Lendsqr has provided the necessary support from our go-live phase and even till date. We owe a part of 234Loan's success to this consistent support."
                name="Adewale Otolorin"
                organization="CEO, 234Loan"
              />
            </div>
            <div className="flex-1">
              <LendingTeamCard
                src={assets.logo5}
                src2={assets.nigeria}
                src3={assets.img5}
                content="We can't recommend Lendsqr enough. Their technology is simply the best when it comes to lending at scale!."
                name="Bankole Akinwunmi"
                organization="Co-founder, Urgent10k"
              />
            </div>{" "}
            <div className="flex-1">
              <LendingTeamCard
                src={assets.logo6}
                src2={assets.nigeria}
                src3={assets.img6}
                content="Because our customers are mostly artisans and not exactly tech savvy, the manual loan feature makes it easy for us to help out and save the day."
                name="Damaris Onyendi"
                organization="CEO, Coverdey"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LendingTeam;
