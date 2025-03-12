import { assets } from "../assets/assets";
import BenefitCard from "./BenefitCard";
import Container from "./Container";

const Benefits = () => {
  return (
    <section className="mt-10 pt-10 bg-blue-50/35 ">
      <Container>
        {/* wrapper  for left and right sides*/}
        <div className=" flex justify-between items-center">
          {/* left side */}
          <div className="flex-1  mb-5 pb-5">
            <div className="w-full flex flex-col">
              <h3 className="text-secondary-100 py-5">WHY LENDSQR?</h3>

              <div className="text-primary-200 text-2xl lg:text-4xl font-bold">
                <h1 className="">We've overcome every</h1>
                <h1 className="">
                  challenge to empower your
                  <h1 className="">success.</h1>
                </h1>
              </div>
              <p className="text-primary-300 text-xl flex flex-wrap pt-5">
                Having encountered nearly every issue a lender might face, we
                offer comprehensive solutions. By choosing Lendsqr as the
                backbone of your digital lending platform, you are choosing
                guaranteed growth and success.
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1  hidden lg:block"></div>
        </div>
        {/* wrapper div */}
        <div className=" flex justify-center lg:justify-between items-center h-auto lg:h-[500px] ">
          {/* left side */}
          <div className="flex-1 h-full w-full grid grid-cols-1 md:grid-cols-2 ">
            {/* Benefit Card */}

            <div className="py-2 ">
              <BenefitCard
                className="h-[220px] w-full md:w-[350px] lg:w-[250px] bg-[#E9F2FF] px-3 rounded-lg"
                src={assets.cost_img}
                heading="Cost effective"
                paragraph="Launch at 5% of the cost of building your own proprietary platform."
              />
            </div>
            <div className="py-2 ">
              <BenefitCard
                className="h-[220px] w-full md:w-[350px] lg:w-[250px] bg-[#F3F0FF] px-3 rounded-lg"
                src={assets.fast_img}
                heading="Faster time to market"
                paragraph="Launch in weeks with our mobile app offering. Launch in hours with our web and USSD platform."
              />
            </div>
            <div className="py-2">
              <BenefitCard
                className="h-[220px] w-full md:w-[350px] lg:w-[250px] bg-[#E7F9FF] px-3 rounded-lg"
                src={assets.com_img}
                heading="Community immunity"
                paragraph="Access to tons of data from other lenders to collaboratively block bad borrowers."
              />
            </div>
            <div className="py-2">
              <BenefitCard
                className="h-[220px] w-full md:w-[350px] lg:w-[250px] bg-[#FFECEB] px-3 rounded-lg"
                src={assets.com_2}
                heading="Expertise"
                paragraph="Lendsqr talents have extensive experience with credit, data, and tech."
              />
            </div>
          </div>
          <div className="flex-1 hidden h-full lg:block">
            <img src={assets.benefit_image} alt="" className="w-full h-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
