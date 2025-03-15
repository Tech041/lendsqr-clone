import { assets } from "../assets/assets";
import Container from "../components/Container";

const UserPage = () => {
  return (
    <main className="w-full h-[auto] bg-gray-100">
      <Container>
        <nav className="w-full h-[100px] flex justify-between items-center  px-5 ">
          <div className=" flex-1 flex justify-between">
            {/* left */}
            <div className="">
              <img
                src={assets.logo}
                width={144}
                height={30}
                alt="logo"
                className="w-[144px] h-[30px]"
              />
            </div>
            <div className="hidden  lg:flex  justify-center items-center bg-white w-[400px]  ">
              <input
                type="text"
                placeholder="Search for anything"
                className="w-[360px]  border border-[#39CDCC] px-2 py-1.5  rounded-l-[8px] outline-none placeholder:pl-3 "
              />
              <span className="w-10 bg-[#39CDCC]  clear-start flex items-center justify-center h-full rounded-r-[8px]">
                <img
                  src={assets.search_icon}
                  width={14}
                  height={14}
                  alt="search-icon"
                />
              </span>
            </div>
          </div>
          {/* right */}
          <div className=" flex-1 flex justify-between">
            {/* left */}
            <div className="flex-1"></div>
            {/* right */}
            <div className=" flex-1 flex justify-evenly items-center">
              <div className="underline hidden lg:block">Docs</div>
              <div className="hidden lg:block">
                <img
                  src={assets.bell_icon}
                  width={26}
                  height={26}
                  alt=""
                  className="w-[26px] h-[26px]"
                />
              </div>
              <div className="flex justify-between items-center gap-2">
                <img
                  src={assets.profile_icon}
                  width={48}
                  height={48}
                  alt=""
                  className="w-[48px] h-[48px] rounded-full"
                />

                <div className="flex justify-between gap-1">
                  <p className="hidden lg:block">Perterson</p>

                  <img
                    src={assets.drop_down_icon}
                    width={20}
                    height={20}
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex justify-between">
          <div className=" bg-orange-500 flex-1 hidden lg:flex items-center justify-center">
            <img src={assets.loan_img} alt="" className="w-[90%] h-[70%]" />
          </div>
          <div className="flex-1  ">
            <form className="w-full px-4 py-3 bg-white shadow-lg rounded-md">
              <h1 className="text-2xl font-semibold text-center py-3">
                Personal Information
              </h1>
              <div className="pt-3">
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  className="border rounded-md w-full px-4 py-2"
                />
              </div>
              <div className="pt-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border rounded-md w-full px-4 py-2"
                />
              </div>
              <div className="pt-3">
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="border rounded-md w-full px-4 py-2"
                />
              </div>
              <div className="pt-3">
                <input
                  type="text"
                  placeholder="Residential address"
                  className="border rounded-md w-full px-4 py-2"
                />
              </div>
              <div className="">
                {/* wrappper */}

                <div className="pt-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
                  <select className="border rounded-md  w-full lg:w-[25%] px-4 py-2">
                    <option value="" className="">
                      Male
                    </option>
                    <option value="" className="">
                      Female
                    </option>
                  </select>
                  <select className="border rounded-md w-full lg:w-[35%] px-4 py-2">
                    <option value="" className="">
                      Single
                    </option>
                    <option value="" className="">
                      Married
                    </option>
                  </select>
                  <input
                    type="tel"
                    placeholder="BVN"
                    className="border rounded-md w-full lg:w-[35%] px-4 py-2"
                  />
                </div>
              </div>
              <h1 className="text-2xl font-semibold text-center py-3">
                Education and Employment
              </h1>
              <div className="pt-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Employment Status</h2>
                  <div className="">
                    <select className="border rounded-md  w-full px-4 py-2">
                      <option value="" className="">
                        Employee
                      </option>
                      <option value="" className="">
                        Employer
                      </option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-1 ">
                  <h2 className="">Sector of Employment</h2>
                  <div className="">
                    <select className="border rounded-md  w-full px-4 py-2">
                      <option value="" className="">
                        Fintech
                      </option>
                      <option value="" className="">
                        Academia
                      </option>
                      <option value="" className="">
                        Oil
                      </option>{" "}
                      <option value="" className="">
                        Telecoms
                      </option>
                      <option value="" className="">
                        Others
                      </option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Level of Education</h2>
                  <div className="">
                    <select className="border rounded-md  w-full px-4 py-2">
                      <option value="" className="">
                        HND
                      </option>
                      <option value="" className="">
                        B.Sc
                      </option>
                      <option value="" className="">
                        B.A
                      </option>
                      <option value="" className="">
                        PhD
                      </option>
                      <option value="" className="">
                        Others
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              {/* second row under education/employment */}
              <div className="pt-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Office Email</h2>
                  <div className="">
                    <input
                      type="email"
                      placeholder="Office Email"
                      className="border rounded-md w-full px-4 py-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Monthly Income</h2>
                  <div className="">
                    <input
                      type="tel"
                      placeholder="Income.."
                      className="border rounded-md w-full px-4 py-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Duration of Employment</h2>
                  <div className="">
                    <select className="border rounded-md  w-full px-4 py-2">
                      <option value="" className="">
                        0-1 yr
                      </option>
                      <option value="" className="">
                        2-5yrs
                      </option>
                      <option value="" className="">
                        6-10yrs
                      </option>
                      <option value="" className="">
                        11yrs
                      </option>
                      <option value="" className="">
                        Others
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-semibold text-center py-3">
                Socials
              </h1>
              <div className="pt-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Twitter</h2>
                  <div className="">
                    <input
                      type="email"
                      placeholder="X Handle"
                      className="border rounded-md w-full px-4 py-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Facebook</h2>
                  <div className="">
                    <input
                      type="email"
                      placeholder="Username"
                      className="border rounded-md w-full px-4 py-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Instagram</h2>
                  <div className="">
                    <input
                      type="email"
                      placeholder="IG Handle"
                      className="border rounded-md w-full px-4 py-2"
                    />
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-semibold text-center py-3">
                Guarantor
              </h1>
              <div className="pt-3 flex flex-col gap-3">
                <div className="flex flex-col">
                  <h2 className="">Full Name</h2>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="border rounded-md w-full px-4 py-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="">Phone Number</h2>
                  <div className="">
                    <input
                      type="tel"
                      placeholder="Mobile"
                      className="border rounded-md w-full px-4 py-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col ">
                  <h2 className="">Email</h2>
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="border rounded-md w-full px-4 py-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col ">
                  <h2 className="">Relationship</h2>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Relationship"
                      className="border rounded-md w-full px-4 py-2"
                    />
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center py-3">
                <button className="text-white  font-semibold px-4 py-2 bg-blue-600 rounded-lg w-[50%] ">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default UserPage;
