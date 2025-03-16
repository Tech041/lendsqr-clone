import { Link } from "react-router-dom";
import { assets, users } from "../assets/assets";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import UserNavbar from "../components/UserNavbar";

const styles =
  "hover:text-secondary-100  text-primary-300 font-semibold hover:border-b-2 border-secondary-100 hover:text-secondary-100 hover:cursor-pointer";
const spanValue = "font-semibold text-primary-300";
const spanStyle = "text-xs text-primary-300  uppercase";
const divStyle = "flex flex-col py-4  ";
const divStyle2 = "hidden lg:flex flex-col py-3 ";
const Dashboard = () => {
  return (
    <main className="w-full h-full bg-white pb-10">
      <Container>
        <UserNavbar />
        <div className="flex min-h-screen">
          <Sidebar />
          <div className=" bg-gray-50/50 w-[75%] h-full px-4 pt-5  ">
            <Link
              to={"/dashboard"}
              className="flex items-center gap-2 hover:bg-gray-200 hover:cursor-pointer w-[25%]"
            >
              <img src={assets.left_icon} alt="" className="w-[15%]" />
              <span className="">Dashboard</span>
            </Link>
            <div className=" font-semibold py-3 flex justify-between items-center">
              <h1 className="">User Details</h1>
              <div className="uppercase lg:flex justify-between items-center gap-3 hidden ">
                <span className="px-2 py-1 text-red-600 border rounded-lg border-red-700">
                  Blacklist user
                </span>
                <span className="px-2 py-1 text-secondary-100 border rounded-lg border-secondary-100">
                  activate user
                </span>
              </div>
            </div>
            {/* Heading */}
            <div className=" bg-white shadow-xl rounded-lg mt-10 px-4 py-2">
              {/* top */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-5">
                <div className="flex-[3] 1 flex flex-col lg:flex-row lg:justify-between items-center px-3">
                  <div className=" flex-1 ">
                    <img
                      src={assets.lend_img1}
                      alt=""
                      className=" w-[100px] h-[100px] rounded-full"
                    />
                  </div>
                  <div className=" flex-1 flex flex-col  items-center">
                    <span className="text-primary-200 font-semibold py-3 lg:py-0">
                      {" "}
                      Nelson
                    </span>
                    <span className="hidden lg:block">24ijcd</span>
                  </div>
                </div>
                <div className="flex-[1.5]  border-l-2 border-r-2 px-3 flex flex-col justify-center h-[100px]">
                  <div className="lg:flex flex-col justify-center hidden">
                    <p className="text-center  text-black pb-2 ">User's Tire</p>
                    <p className="flex items-center justify-center gap-2">
                      <span className="">
                        <img
                          src={assets.start_icon_1}
                          alt=""
                          className="w-4 h-4"
                        />
                      </span>
                      <span className="">
                        <img
                          src={assets.start_icon_2}
                          alt=""
                          className="w-4 h-4"
                        />
                      </span>
                      <span className="">
                        <img
                          src={assets.start_icon_2}
                          alt=""
                          className="w-4 h-4"
                        />
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex-[5] pl-3 lg:pl-10 flex  lg:justify-start flex-col  items-center lg:items-start  ">
                  <p className="text-primary-200 font-semibold text-lg">
                    #200,000.00
                  </p>
                  <p className="">First Bank</p>
                </div>
              </div>
              {/* bottom */}
              <div className="pt-10 lg:flex justify-between items-center hidden ">
                <p className={styles}>General Details</p>
                <p className={styles}>Documents</p>
                <p className={styles}>Bank Details</p>
                <p className={styles}>Loans</p>
                <p className={styles}>Savings</p>
                <p className={styles}>App and System</p>
              </div>
            </div>

            {/* Container for user details */}
            {users.map((user) => (
              <div
                key={user.user_1}
                className=" bg-white shadow-xl  mt-5 px-4 py-2"
              >
                <div className="py-3 my-4">
                  {/* user data table  for Personal infor*/}
                  {/* top */}
                  <h1 className="py-3 font-semibold text-primary-200 text-center lg:text-start">
                    Personal Information
                  </h1>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className={divStyle}>
                      <span className={spanStyle}>Full Name</span>
                      <span className={spanValue}>
                        {user.user_1.personalData.full_name}
                      </span>
                    </div>
                    <div className={divStyle2}>
                      <span className={spanStyle}>Phone Number</span>
                      <span className={spanValue}>
                        {user.user_1.personalData.phone}
                      </span>
                    </div>
                    <div className={divStyle2}>
                      <span className={spanStyle}>Email Address</span>
                      <span className={spanValue}>
                        {user.user_1.personalData.email}
                      </span>
                    </div>
                    <div className={divStyle2}>
                      <span className={spanStyle}>BVN</span>
                      <span className={spanValue}>
                        {user.user_1.personalData.bvn}
                      </span>
                    </div>{" "}
                    <div className={divStyle}>
                      <span className={spanStyle}>Gender</span>
                      <span className={spanValue}>
                        {user.user_1.personalData.gender}
                      </span>
                    </div>
                    <div className={divStyle2}>
                      <span className={spanStyle}>Marital Status</span>
                      <span className={spanValue}>
                        {user.user_1.personalData.marital_status}
                      </span>
                    </div>
                    <div className={divStyle2}>
                      <span className={spanStyle}>Address</span>
                      <span className={spanValue}>
                        {user.user_1.personalData.address}
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="border   " />
                {/* user data table  for Education*/}

                <div className=" py-5 my-4">
                  {/* top */}
                  <h1 className="py-3 font-semibold text-primary-200 text-center lg:text-start">
                    Education and Employment
                  </h1>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className={divStyle}>
                      <span className={spanStyle}>Level of Education</span>
                      <span className={spanValue}>
                        {user.user_1.education_and_employment.level}
                      </span>
                    </div>
                    <div className={divStyle2}>
                      <span className={spanStyle}>Employment Status</span>
                      <span className={spanValue}>
                        {user.user_1.education_and_employment.employment_status}
                      </span>
                    </div>
                    <div className={divStyle2}>
                      <span className={spanStyle}>Sector</span>
                      <span className={spanValue}>
                        {user.user_1.education_and_employment.sector}
                      </span>
                    </div>{" "}
                    <div className={divStyle2}>
                      <span className={spanStyle}>Duration</span>
                      <span className={spanValue}>
                        {user.user_1.education_and_employment.duration}
                      </span>
                    </div>{" "}
                    <div className={divStyle2}>
                      <span className={spanStyle}>office email</span>
                      <span className={spanValue}>
                        {user.user_1.education_and_employment.office_email}
                      </span>
                    </div>{" "}
                    <div className={divStyle}>
                      <span className={spanStyle}>monthly income</span>
                      <span className={spanValue}>
                        {user.user_1.education_and_employment.monthly_icome}
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="border   " />
                {/* for socials */}
                <div className="py-3 my-4">
                  {/* top */}
                  <h1 className="py-3 font-semibold text-primary-200 text-center lg:text-start">
                    socials
                  </h1>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className={divStyle2}>
                      <span className={spanStyle}>twitter</span>
                      <span className={spanValue}>
                        {user.user_1.socials.twitter}
                      </span>
                    </div>
                    <div className={divStyle}>
                      <span className={spanStyle}>FaceBook</span>
                      <span className={spanValue}>
                        {user.user_1.socials.facebook}
                      </span>
                    </div>
                    <div className={divStyle}>
                      <span className={spanStyle}>instagram</span>
                      <span className={spanValue}>
                        {user.user_1.socials.instagram}
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="border   " />
                {/* for guarantor */}
                <div className="py-5 my-4">
                  {/* top */}
                  <h1 className="py-3 font-semibold text-primary-200 text-center lg:text-start">
                    Guarantor
                  </h1>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className={divStyle}>
                      <span className={spanStyle}>full name</span>
                      <span className={spanValue}>
                        {user.user_1.guarantor.full_name}
                      </span>
                    </div>
                    <div className={divStyle2}>
                      <span className={spanStyle}>phone number</span>
                      <span className={spanValue}>
                        {user.user_1.guarantor.phone}
                      </span>
                    </div>
                    <div className={divStyle2}>
                      <span className={spanStyle}>email address</span>
                      <span className={spanValue}>
                        {user.user_1.guarantor.email}
                      </span>
                    </div>
                    <div className={divStyle}>
                      <span className={spanStyle}>relationship</span>
                      <span className={spanValue}>
                        {user.user_1.guarantor.relationship}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Dashboard;
