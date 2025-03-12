import { assets } from "../assets/assets";
import Container from "./Container";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Hover from "./Hover";
const divStyle =
  "flex-1 flex justify-center items-center text-black font-semibold px-3 group hover:cursor-pointer";
const imageStyle =
  "w-5 h-5 group-hover:rotate-180 transition-transform duration-700 ";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full py-5 fixed bg-white  shadow-xl z-50 backdrop-blur-2xl border-b-2 lg:border-b-0  ">
      <Container>
        <div className="w-full">
          <div className="flex justify-between items-center ">
            {/* left div */}
            <div className="flex-1  ">
              <Link to={"/"}>
                <img
                  src={assets.logo}
                  width={120}
                  height={36}
                  alt=""
                  className=""
                />
              </Link>
            </div>
            {/* center div */}
            <nav className="flex- hidden lg:flex justify-between items-center">
              <div className={divStyle}>
                <div className="capitalize group relative">solutions</div>
                <img
                  src={assets.drop_down_icon}
                  width={20}
                  height={20}
                  alt=""
                  className={imageStyle}
                />
                {/* Hover for solution */}
                <Hover
                  title1="Comapny"
                  link1=" Start with Lendsq"
                  text1="  Kickstart your lending journey with confidence."
                  link2="Scale with Lendsqr"
                  text2="The smartest lenders choose lendsqr."
                  link3="Build with Lendsqr"
                  text3="The smartest lenders choose lendsqr."
                  title2=" Your industry"
                  secondLink=" For Banks"
                  thirdLink=" For Fintechs"
                  fourthLink=" For Microfinance Institutions."
                  fifthLink="For SME Lenders."
                  sixthLink="For Human Resources."
                  title3=" latest case study"
                  paragraph=" How Lendsqr helped Equity Bank use Snapcash to Bridge credit
                  divide."
                  lastLink="Learn More"
                  src={assets.solution_img}
                />
              </div>
              <div className={divStyle}>
                <div className="capitalize group relative">products</div>
                <img
                  src={assets.drop_down_icon}
                  width={20}
                  height={20}
                  alt=""
                  className={imageStyle}
                />
                {/* hover for products */}
                <Hover
                  title1="getting started"
                  link1=" How to use"
                  text1="  Get started in 4 easy steps"
                  title2="products"
                  secondLink=" Back Office"
                  thirdLink="Channels"
                  fourthLink="Loan Product Management"
                  fifthLink="Decision Models"
                  sixthLink="Savings And Investment"
                  seventhLink="Payment And Collections"
                  title3="manage while mobile"
                  paragraph="Download Lendsqr App from Google playstore"
                  lastLink="Learn More"
                  src={assets.product_img}
                />
              </div>
              <div className={divStyle}>
                <Link to={"#"} className="capitalize">
                  pricing
                </Link>
              </div>
              <div className={divStyle}>
                <div className="capitalize group relative">resources</div>
                <img
                  src={assets.drop_down_icon}
                  width={20}
                  height={20}
                  alt=""
                  className={imageStyle}
                />
                {/* hover for resources */}
                <Hover
                  title1="learn"
                  link1="Blog "
                  text1="Expertly crafted insights on everything about lending."
                  link2="Guides"
                  text2="Your every question answered about our products "
                  link3="Case Studies"
                  text3="Learn how we have helped our customers grow."
                  link4="Videos"
                  text4="Workthrouhs and insights"
                  title2=" discover"
                  secondLink="Providers"
                  resource2="Find providers to power your digital lending from payment, KYC to credit scoring and more."
                  thirdLink="Lenders"
                  resource3="Discover our lenders and any other all over the world helping to provide loan any timw you need it."
                  fourthLink="Loans"
                  resource4="We do not provide loans directly but we have curated a global list of options from our trusted lending partners."
                  title3=" latest case study"
                  paragraph="Powerful API to drive your lending and financial services."
                  lastLink="Learn More"
                  src={assets.resources_image}
                />
              </div>
            </nav>

            {/* right div */}
            <div className="flex-1 hidden lg:flex justify-end items-center gap-5 ">
              <div className="">
                <Link to={"/login"} className="text-black font-semibold">
                  Log In
                </Link>
              </div>
              <Link to={"/register"} className="bg-secondary-100 rounded">
                <button className="text-white font-semibold px-4 py-2">
                  Create Free Account
                </button>
              </Link>
            </div>
            <div
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden hover:cursor-pointer"
            >
              {open ? (
                <span className="">
                  <IoCloseSharp size={30} />
                </span>
              ) : (
                <span className="">
                  <GiHamburgerMenu size={30} />
                </span>
              )}
            </div>
            {/* mobile navigation */}
          </div>
          {open && (
            <nav className="lg:hidden bg-white  mt-5 pt-5 h-screen relative">
              <hr className=" " />
              <div className="mt-5 py-3 flex justify-between hover:cursor-pointer">
                <span className="capitalize">solutions</span>
                <span className="">
                  <IoIosArrowRoundForward size={30} />
                </span>
              </div>
              <div className=" py-3 flex justify-between hover:cursor-pointer">
                <span className="capitalize">products</span>
                <span className="">
                  <IoIosArrowRoundForward size={30} />
                </span>
              </div>
              <div className="py-3">
                <Link to={"#"} className="capitalize">
                  pricing
                </Link>
              </div>
              <div className="py-3 flex justify-between hover:cursor-pointer">
                <span className="capitalize">resources</span>
                <span className="">
                  <IoIosArrowRoundForward size={30} />
                </span>
              </div>
              {/* down links */}
              <div className="absolute bottom-24 w-full">
                <div className="w-full text-center pb-3">
                  <Link
                    to={"/login"}
                    className=" text-primary-200 font-semibold"
                  >
                    Log In
                  </Link>
                </div>
                <div className=" w-full bg-secondary-200 rounded text-center">
                  <Link to={"/register"}>
                    <button className=" text-white font-semibold  py-3">
                      Create Free Account
                    </button>
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
