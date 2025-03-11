import { assets } from "../assets/assets";

const CeoCard = () => {
  return (
    <section className=" h-[400px] bg-secondary-200">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full">
        <div className="bg-red-500 flex-1 w-full lg:w-auto flex justify-start items-center">
            <div className="">
                <img src={assets.ceo_image} width={200} height={2} alt="" />
            </div>
        </div>
        <div className="bg-yellow-600 flex-[2] w-full lg:w-auto flex justify-center items-center">
          <div className="">Content</div>
        </div>
      </div>
    </section>
  );
};

export default CeoCard;
