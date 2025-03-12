interface BenefitCardProp {
  className: string;
  src: string;
  heading: string;
  paragraph: string;
}

const BenefitCard = ({
  className,
  src,
  heading,
  paragraph,
}: BenefitCardProp) => {
  return (
    <div className={className}>
      <div className="pl-6  pt-10">
        <div className="pb-2  w-[40px] h-[40px] flex items-center justify-center  ">
          <div className="w-full h-full flex justify-center items-center  rounded-full">
            <img src={src} alt="" className="w-full h-full  rounded-full" />
          </div>
        </div>
        <div className="">
          <h1 className="text-lg font-semibold text-black">{heading}</h1>
          <p className="flex flex-wrap text-primary-300">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
