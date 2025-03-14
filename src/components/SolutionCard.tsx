interface SolutionCardProp {
    className: string;
    text1: string;
    text2: string;
    src: string;
  }
  const Solution = ({ className, text1, text2, src }: SolutionCardProp) => {
    return (
      <div className={className}>
        <div className="pt-10">
          <div className="pb-2 font-bold ">
            <div className="w-full h-full text-black text-2xl">{text1}</div>
          </div>
          <div className="">
            <h1 className="text-lg  text-primary-300">{text2}</h1>
          </div>
        </div>
        <div className="h-[5%] ">
          <p className="text-8xl font-bold  absolute bottom-0 right-0 text-gray-500 w-[45%] lg:w-[40%] h-[40%]">
            <img src={src} alt="" className="h-full w-full" />
          </p>
        </div>
      </div>
    );
  };
  
  export default Solution;
  