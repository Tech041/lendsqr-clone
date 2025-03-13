import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
interface NoticeCardProp {
  src: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
const NoticeCard = ({ src, text1, text2, text3, text4 }: NoticeCardProp) => {
  return (
    <div className=" w-full px-5 mt-10 py-10 lg:w-[45%] h-[730px] lg:h-[700px] bg-[#FAFAFA] border rounded-md shadow-md">
      <div className="mt-5 pt-10 flex justify-center w-full ">
        <div className="  flex justify-center w-[50%] h-[50%]">
          <img src={src} alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="">
        <div className="">
          <p className="font-semibold text-primary-300 uppercase">{text1}</p>
          <h1 className="flex flex-wrap text-2xl lg:text-4xl text-[#13367D] font-semibold mt-2 pt-2">
            {text2}
          </h1>
          <p className="text-primary-300 text-xl py-3 mt-2">{text3}</p>
          <div className="mt-2 pt-2">
            <Link to={"#"} className="text-green-600 flex items-center gap-3">
              <span className="">{text4}</span>
              <span className="text-green-600">
                <IoIosArrowRoundForward size={30} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
