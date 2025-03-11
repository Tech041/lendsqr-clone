import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className=" h-[900px] w-full">
      <div className="flex flex-col md:flex-row h-full w-full">
        {/* left */}
        <div className="bg-[#FFFFFF] flex-1 mt-10  ">
          <div className="px-20 py-10">
            <Link to={"/"}>
              <img
                src={assets.logo}
                width={173}
                height={36}
                alt=""
                className=""
              />
            </Link>
          </div>
          <div className="p-5  mt-20">
            <img
              src={assets.sign_in_icon}
              width={600}
              height={337}
              alt=""
              className=""
            />
          </div>
        </div>
        {/* right */}
        <div className="flex-1 bg-gray-50/50 flex justify-center items-center h-full ">
          <div className=" flex flex-col items-center md:items-start   w-[80%]">
            <h1 className="text-[#213F7D] font-bold text-[40px] text-center md:text-start">
              Welcome!
            </h1>
            <h2 className="text-[#545F7D] text-[20px] py-2 text-center md:text-start">
              Enter details to login
            </h2>
            <form className=" w-[80%] flex  justify-center h-[400px]  ">
              <div className="w-full flex flex-col gap-3 pt-10">
                <div className="w-full border-2  border-gray-200 h-[50px] flex items-center rounded-md">
                  <input
                    type="email"
                    placeholder="Email"
                    className="outline-none placeholder:pl-2 bg-inherit pl-2 w-full"
                  />
                </div>
                <div className="w-full border-2  border-gray-200 h-[50px] flex justify-between items-center pr-3 rounded-md">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    placeholder="Password"
                    className=" outline-none placeholder:pl-2 bg-inherit  pl-2  w-full"
                  />
                  {showPassword ? (
                    <span
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-[#] text-[12px] cursor-pointer"
                    >
                      Hide
                    </span>
                  ) : (
                    <span
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-[#39CDCC] text-[12px] cursor-pointer"
                    >
                      Show
                    </span>
                  )}
                </div>
                <div className="">
                  <p className="text-[#39CDCC] text-[12px] cursor-pointer ">
                    Forgot Password?
                  </p>
                </div>
                <div className="h-[50px] w-full bg-[#39CDCC] rounded-md flex justify-center items-center hover:bg-[#87f5f5] ">
                  <button className="text-white">Login</button>
                </div>
                <div className="text-right">
                  <Link
                    onClick={() => scrollTo(0, 0)}
                    to={"/register"}
                    className=" px-4 text-[#39CDCC] font-semibold cursor-pointer"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
