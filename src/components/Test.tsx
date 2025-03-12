import { assets } from "../assets/assets";

const BenefitCard = () => {
  return (
    <div className={`h-[220px] w-full md:w-[350px] lg:w-[250px] bg-cyan-300 px-3 rounded-lg`}>
      <div className="pl-6  pt-10">
        <div className="pb-2  w-[40px] h-[40px] flex items-center justify-center  ">
          <div className="w-full h-full flex justify-center items-center  rounded-full">
            <img
              src={assets.cost_img}
              alt=""
              className="w-full h-full  rounded-full"
            />
          </div>
        </div>
        <div className="">
          <h1 className="text-lg font-semibold text-black">Cost effective</h1>
          <p className="flex flex-wrap text-primary-300">
            Launch at 5% of the cost of building your own proprietary platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
