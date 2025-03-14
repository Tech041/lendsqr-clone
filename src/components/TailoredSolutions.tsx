import { assets } from "../assets/assets";
import Container from "./Container";
import Solution from "./SolutionCard";

const TailoredSolutions = () => {
  return (
    <section className="mt-10 pt-5">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex-1 w-full lg:w-auto ">
            <h1 className="flex flex-wrap text-2xl lg:text-4xl font-semibold text-primary-200 pl-2 justify-center lg:justify-start ">
              Tailored solutions for your industry
            </h1>
          </div>
          <div className="flex-1 hidden lg:block bg-red-300"></div>
        </div>
        {/* card */}
        <div className="flex items-center gap-3 overflow-x-scroll pt-10 ">
          <div className="relative">
            <Solution
              className=" h-[350px] w-[300px]  lg:w-[450px]  bg-[#E8F7F7] px-3 rounded-lg"
              text1="Banks"
              text2="Expand digital lending,reaching the unbanked and amplifying market presence."
              src={assets.sol_1}
            />
          </div>
          <div className="relative">
            <Solution
              className=" h-[350px] w-[300px]  lg:w-[450px]  bg-[#FFDFA3] px-3 rounded-lg"
              text1="Fintechs"
              text2="Connect with our ecosystem of lenders to deliver your solutions at scale."
              src={assets.sol_2}
            />
          </div>{" "}
          <div className="relative">
            <Solution
              className="h-[350px] w-[300px]  lg:w-[450px]  bg-[#EBF0FA] px-3 rounded-lg"
              text1="SME Lenders"
              text2="Tailored digital lending solutions and expert support at a fraction of the cost."
              src={assets.sol_3}
            />
          </div>{" "}
          <div className="relative">
            <Solution
              className="h-[350px] w-[300px] lg:w-[450px]   bg-[#FFECEB] px-3 rounded-lg"
              text1="Microfinance Institutions"
              text2="Get a mobile app and an extensively configurable lending stack to meet your cunstomers' needs."
              src={assets.sol_4}
            />
          </div>
          <div className="relative">
            <Solution
              className="h-[350px] w-[300px] lg:w-[450px]   bg-[#D1EDFF] px-3 rounded-lg"
              text1="Human Resources"
              text2="Empower your employess with financial freedom with staff loans and provide support they need to achieve their dream."
              src={assets.sol_5}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TailoredSolutions;
