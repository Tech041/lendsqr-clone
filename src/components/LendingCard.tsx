interface LendingCardProp {
  src: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
  text7: string;
  text8: string;
  text9: string;
}
const LendingCard = ({
  src,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
}: LendingCardProp) => {
  return (
    <div className="my-5 py-5">
      {/* wrapper div */}
      <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center h-[600px]">
        <div className="flex-1 flex justify-center items-center  h-full">
          <img
            src={src}
            width={400}
            height={300}
            alt=""
            className="w-[400px] h-[300px]"
          />
        </div>
        <div className="flex-1  h-full">
          <div className="mt-10 pt-10">
            <h3 className="uppercase my-2 py-2 text-lg  text-secondary-100">
              {text1}
            </h3>
            <h1 className="text-base lg:text-3xl text-primary-200 font-semibold">
              {text2}
            </h1>
            <p className="my-2 py-2 text-primary-300">{text3}</p>
            <div className="">
              <h2 className="my-2 py-2 text-lg font-semibold text-black">
                {text4}
              </h2>
              <p className=" text-primary-300">{text5}</p>
            </div>
            <hr className="w-full my-2 py-2" />
            <div className="">
              <h2 className="my-2 py-2 text-lg font-semibold text-black">
                {text6}
              </h2>
              <p className=" text-primary-300">{text7}</p>
            </div>
            <hr className="w-full my-2 py-2" />
            <div className="">
              <h2 className="my-2 py-2 text-lg font-semibold text-black">
                {text8}
              </h2>
              <p className=" text-primary-300">{text9}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendingCard;
