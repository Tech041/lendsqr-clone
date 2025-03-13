interface LenderCardProp {
  className: string;
  text1: string;
  text2: string;
  text3: string;
}
const LenderCard = ({ className, text1, text2, text3 }: LenderCardProp) => {
  return (
    <div className={className}>
      <div className="pt-10">
        <div className="pb-2 font-bold ">
          <div className="w-full h-full text-white">{text1}</div>
        </div>
        <div className="">
          <h1 className="text-lg  text-white">{text2}</h1>
        </div>
      </div>
      <div className="h-[50%] ">
        <p className="text-8xl font-bold  absolute bottom-0 right-0 text-gray-500">
          {text3}
        </p>
      </div>
    </div>
  );
};

export default LenderCard;
