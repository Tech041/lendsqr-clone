import { assets } from "../assets/assets";
import Container from "./Container";
import LendianCard from "./LendianCard";

const LendianSection = () => {
  return (
    <section className="bg-[#F5FCFF] mt-10 py-10">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex-1 w-full lg:w-auto ">
            <h1 className="flex flex-wrap text-2xl lg:text-4xl font-semibold text-primary-200 pl-2 justify-center lg:justify-start ">
              The Lendian Chronicles
            </h1>
            <p className="text-primary-300 flex flex-wrap pt-3 text-xl">
              Expertly crafted insights on everything about lending and how
              lenders are using Lendsqr.
            </p>
          </div>
          <div className="flex-1 hidden lg:block bg-red-300"></div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full pt-10 ">
          {/* Card */}
          <div className="flex-1 bg-white">
            <LendianCard
              src={assets.lend_img1}
              text1="Lending"
              text2="Top 5 loan apps for UGX 200,000 in Uganda"
              text3="If you think you have trust issues, try being a lender in Sierra Leone. It’s a constant battle to separate fact from fiction, and every loan feels"
              text4="November 11, 2024"
            />
          </div>{" "}
          <div className="flex-1">
            <LendianCard
              src={assets.lend_img2}
              text1="Lending"
              text2="How to get a lending license in Namibia"
              text3="So, who’s actually getting it right? Which KYC providers truly understand the complexities of lending in West Africa? "
              text4="February 25, 2025"
            />
          </div>
          <div className="flex-1">
            <LendianCard
              src={assets.lend_img3}
              text1="Lending"
              text2="Top 5 loan apps in Botswana to get a P5000 loan"
              text3="So, which loan apps truly fulfill their promises? Before we look at the top five that stand out in Ethiopia today, let’s understand some of the"
              text4="February 16, 2025"
            />
          </div>
        </div>
        <div className="flex items-center  justify-center pt-10 font-semibold">
          <button className="bg-[#349898] px-5 py-3 text-white rounded-md">
            Visit our blog
          </button>
        </div>
      </Container>
    </section>
  );
};

export default LendianSection;
