import { assets } from "../assets/assets";
import Container from "./Container";

const ApiBuild = () => {
  return (
    <section className="mt-10 pt-5 bg-[#091E42]">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-10 pt-10">
          {/* left  */}
          <div className="flex-1 ">
            <div className="">
              <p className="font-semibold text-secondary-100">
                Built to empower lenders
              </p>
              <h1 className="flex flex-wrap text-2xl lg:text-4xl text-white font-semibold">
                Lending APIs to power your loan business at scale
              </h1>
              <p className="text-gray-300 text-xl">
                Turbocharge your loan business with Adjutor lending APIs from
                Lendsqr. With Adjutor, you get assured loan repayments with our
                direct debit APIs; you get assurance of quality borrowers when
                you use our Karma blacklist APIs; and even more.
              </p>
              <div className="py-5 flex  items-center gap-4 flex-wrap">
                <button className="px-4 py-2 bg-secondary-100 text-white rounded-md">Learn more</button>
                <button className="px-4 py-2 bg-inherit text-white border border-gray-300 rounded-md">Read API Documentation</button>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="flex-1 bg-green-700 flex justify-center items-center">
            <div className="">
              <img src={assets.api_image} alt="" className=" w-full h-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ApiBuild;
