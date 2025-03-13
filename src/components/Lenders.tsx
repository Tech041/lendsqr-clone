import Container from "./Container";
import LenderCard from "./LenderCard";
import ManagementCard from "./ManagementCard";

const Lenders = () => {
  return (
    <section className="bg-[#091E42] py-14">
      <Container>
        <div className="flex justify-between items-center mt-10 ">
          <div className="flex-1  w-full lg:w-auto">
            <div className="pt-10">
              <h1 className="flex flex-wrap text-2xl lg:text-4xl text-white font-semibold">
                Lenders love Lendsqr!
              </h1>
              <p className="text-gray-300 text-xl">
                Our strong capability and robust platform enable us to offer
                support across the entire lending lifecycle.
              </p>
              <div className="py-5 flex  items-center gap-4 flex-wrap">
                <button className="px-4 py-2 bg-secondary-100 text-white rounded-md font-semibold">
                  Start lending with Lendsqr
                </button>
                <button className="px-4 py-2 bg-inherit text-white border border-gray-300 rounded-md font-semibold">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1  hidden lg:block"></div>
        </div>
        <div className="mt-10 py-5 flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 ">
          {/* card */}
          <div className="relative flex-1">
            <LenderCard
              className=" h-[250px] lg:h-[300px] w-full   bg-secondary-100 px-3 rounded-lg"
              text1="5500+ lenders"
              text2="We're helping lenders across the world scale their loan business"
              text3="5500"
            />
          </div>
          <div className="relative flex-1">
            <LenderCard
              className="h-[250px] lg:h-[300px] w-full   bg-[#953752] px-3 rounded-lg"
              text1="2.1m+ customers"
              text2="Our Lending-as-a-Service platform helps lenders serve over 2.1m humans across the world."
              text3="2.1m"
            />
          </div>
          <div className="relative flex-1">
            <LenderCard
              className="h-[250px] lg:h-[300px] w-full   bg-[#524db2] px-3 rounded-lg"
              text1="Available in 100+ countries"
              text2="We're global but also localized for every currency, locale, and most languages."
              text3="100"
            />
          </div>
        </div>
        <div className=" pt-1 flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4">
          <div className="relative flex-1 ">
            <ManagementCard
              className="h-[300px]  w-full  bg-[#A54800] px-3 rounded-lg"
              text1="1/20 the cost"
              text2="Getting started with Lendsqr is practically free. Our lenders leverage a robust infrastructure at 1/20 the cost it would take to build theirs!"
              text3="1/20"
            />
          </div>
          <div className="relative flex-1 ">
            <ManagementCard
              className="h-[300px]  w-full  bg-[#206A83] px-3 rounded-lg"
              text1="30 mins average time to market"
              text2="It takes no less than 30 mins for a lender to sign up and start accepting loan requests. Yet, we also deliver customized features in record time."
              text3="1/20"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Lenders;
