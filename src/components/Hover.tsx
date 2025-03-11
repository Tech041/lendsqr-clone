import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Container from "./Container";

interface Hoverprop {
  title1: string;
  link1?: string;
  text1?: string;
  link2?: string;
  text2?: string;
  link3?: string;
  text3?: string;
  link4?: string;
  text4?: string;
  title2: string;
  secondLink?: string;
  thirdLink?: string;
  fourthLink?: string;
  fifthLink?: string;
  sixthLink?: string;
  title3: string;
  paragraph: string;
  lastLink: string;
  seventhLink?: string;
  resource2?: string;
  resource3?: string;
  resource4?: string;
  resource5?: string;
  resource6?: string;
  resource7?: string;
  src: string;
}
const Hover = ({
  title1,
  link1,
  text1,
  link2,
  text2,
  link3,
  text3,
  link4,
  text4,
  title2,
  secondLink,
  thirdLink,
  fourthLink,
  fifthLink,
  sixthLink,
  seventhLink,
  title3,
  paragraph,
  lastLink,
  resource2,
  resource3,
  resource4,
  resource5,
  resource6,
  resource7,
  src,
}: Hoverprop) => {
  return (
    <div className=" hidden  group-hover:block absolute top-12 pt-10 right-0 left-0  ">
      <Container>
        <div className="  border-2 border-gray-100 shadow-lg rounded-xl bg-white  ">
          <div className="flex justify-between items-center h-[400px]">
            {/* left div */}
            <div className="flex-1 border-r-2  h-full ">
              <h1 className="pl-3 py-2 mt-8 text-primary-300 uppercase">
                {title1}
              </h1>
              <div className="my-1 py-2 pl-3  ">
                <div className="">
                  <Link
                    to={"#"}
                    className="text-black hover:text-secondary-100 "
                  >
                    {link1}
                  </Link>
                  <p className="text-primary-300">{text1}</p>
                </div>
              </div>
              <div className="my-1 pt-2 pl-3">
                <Link to={"#"} className="text-black hover:text-secondary-100">
                  {link2}
                </Link>
                <p className="text-primary-300">{text2}</p>
              </div>
              <div className="my-1 pt-2 pl-3">
                <Link to={"#"} className="text-black hover:text-secondary-100">
                  {link3}
                </Link>
                <p className="text-primary-300">{text3}</p>
              </div>
              <div className="my-1 py-2 pl-3 mb-5 pb-16">
                <Link to={"#"} className="text-black hover:text-secondary-100">
                  {link4}
                </Link>
                <p className="text-primary-300">{text4}</p>
              </div>
            </div>
            {/* center div */}
            <div className="flex-1 border-r-2  h-full ">
              <h1 className="pl-3 py-2 mt-8 text-primary-300 uppercase">
                {title2}
              </h1>
              <div className="my-1 py-2 pl-3">
                <Link to={"#"} className="text-black hover:text-secondary-100">
                  {secondLink}
                </Link>
                <p className="text-primary-300">{resource2}</p>
              </div>
              <div className="my-1 pt-2 pl-3">
                <Link to={"#"} className="text-black hover:text-secondary-100">
                  {thirdLink}
                </Link>
                <p className="text-primary-300">{resource3}</p>
              </div>

              <div className="my-1 pt-2 pl-3">
                <Link to={"#"} className="text-black hover:text-secondary-100">
                  {fourthLink}
                </Link>
                <p className="text-primary-300">{resource4}</p>
              </div>
              <div className="my-1 pt-2 pl-3">
                <Link to={"#"} className="text-black hover:text-secondary-100">
                  {fifthLink}
                </Link>
                <p className="text-primary-300">{resource5}</p>
              </div>

              <div className="my-1 pt-2 pl-3">
                <Link to={"#"} className="text-black hover:text-secondary-100">
                  {sixthLink}
                </Link>
                <p className="text-primary-300">{resource6}</p>
              </div>
              <div className="my-1 py-2 pl-3 mb-5 pb-16">
                <Link to={"#"} className="text-black hover:text-secondary-100">
                  {seventhLink}
                </Link>
                <p className="text-primary-300">{resource7}</p>
              </div>
            </div>
            {/* right div */}

            <div className="flex-1 h-full  ">
              <h1 className="pl-3 py-2 mt-8 text-primary-300 uppercase">
                {title3}
              </h1>
              <div className="my-1 py-2 pl-3  flex justify-center items-center">
                <div className="w-[200px] h-[150px]">
                  <img src={src} className="w-full h-full" alt="" />
                </div>
              </div>

              <div className="my-1 py-2 pl-3 pb-2">
                <p className="text-black">{paragraph}</p>
              </div>
              <div className="flex items-center gap-1 my-1 py-1 pl-3 text-secondary-100">
                <Link to={"#"} className="hover:underline">
                  {lastLink}
                </Link>
                <span className="">
                  <IoIosArrowRoundForward size={30} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hover;
