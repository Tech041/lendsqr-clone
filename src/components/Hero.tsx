import { IoIosArrowRoundForward } from "react-icons/io";
import { assets } from "../assets/assets";
import Container from "./Container";
import { Link } from "react-router-dom";

const headingStyle = "lg:py-2 lg:my-2";
const Hero = () => {
  return (
    <section className="mt-2 bg-blue-50/35">
      <Container>
        {/* main div for the section  */}
        <div className="flex flex-col lg:flex-row justify-between items-center h-screen">
          {/* left section */}
          <div className="flex-1 ">
            {/* update sign */}
            <div className=" w-full lg:w-[70%]   bg-blue-50 flex items-center py-1 px-1 gap-2 rounded-full">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-2xl text-sm lg:text-base">
                NEW
              </span>
              <span className="text-blue-600 text-sm lg:text-base">
                Your back office is now on Play Store!
              </span>
              <span className="text-blue-600">
                <IoIosArrowRoundForward size={30} />
              </span>
            </div>
            <div className="text-primary-200 text-3xl lg:text-[50px] font-bold mt-5 py-2">
              <h1 className={headingStyle}>The best loan</h1>
              <h1 className={headingStyle}>management system</h1>
              <h1 className={headingStyle}>for smart lenders</h1>
            </div>
            <p className="text-primary-300 text-xl lg:text-lg pt-5">
              Lending is profitable but also difficult but not with Lendsqr's
              loan management software! Start, launch and scale your loan
              business easily across multiple channels and make smart decisions
              all at a fraction of the cost!
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2 ">
              <div className="lg:my-5 pt-2  lg:mr-4 flex items-center lg:items-start">
                <Link
                  to={"/register"}
                  className="bg-secondary-100 px-6 py-4  w-full rounded-md"
                >
                  <button className="text-white font-semibold  w-full ">
                    Create Free Account
                  </button>
                </Link>
              </div>
              <div className="lg:my-5 pt-2 flex flex-col lg:flex-row lg:items-center lg:gap-3  ">
                <Link
                  to={"/register"}
                  className=" px-5 py-3 border rounded-md w-full"
                >
                  <button className="text-black font-semibold w-full text-center ">
                    Book a Demo
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:pt-3">
              <div className="">
                <img
                  src={assets.company_icon}
                  width={20}
                  height={20}
                  alt=""
                  className="w-[20px] h-[20px]"
                />
              </div>
              <div className="">
                <p className="text-lg text-primary-300">
                  Trusted by 5500+ companies
                </p>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className="flex-1 flex items-center justify-center w-[200px] h-[600px]">
            <img src={assets.hero_img} alt="" className="w-[90%] h-[90%]" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
