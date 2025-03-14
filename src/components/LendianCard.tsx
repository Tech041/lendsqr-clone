interface LendianCardProp {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  src: string;
}
const LendianCard = ({ text1, text2, text3, text4, src }: LendianCardProp) => {
  return (
    <div className=" w-full h-[650px] lg:h-[500px] border-2 rounded-md ">
      <div className="flex flex-col  h-full w-full ">
        <div className=" h-[50%] lg:h-[40%] w-full  ">
          <img src={src} alt="" className="h-full w-full" />
        </div>
        <div className=" h-[50%] lg:h-[60%] ">
          <div className="p-3">
            <h3 className="text-xl py-2 ">{text1}</h3>
            <h1 className="text-primary-200 text-3xl font-semibold flex flex-wrap">
              {text2}
            </h1>
            <p className="flex flex-wrap text-primary-300 pt-3">{text3}</p>
            <p className="text-primary-300 pt-3">{text4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendianCard;
