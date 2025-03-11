import { assets } from "../assets/assets";
interface AdvertProp {
  text1: string;
  text2: string;
}

const Advertisement = ({ text1, text2 }: AdvertProp) => {
  return (
    <div className="flex  gap-2">
      <div className="">
        <img
          src={assets.check_icon}
          width={30}
          height={20}
          alt=""
          className="h-[20px] w-[30px]"
        />
      </div>
      <div className="">
        <p className="text-primary-300">
          <span className="font-bold text-black">{text1}</span>
          {text2}
        </p>
      </div>
    </div>
  );
};

export default Advertisement;
