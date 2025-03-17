import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../models/Schema";
import { UserContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
type LoginDataType = z.infer<typeof loginSchema>;

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),
  });

  const formSubmit: SubmitHandler<LoginDataType> = async (
    data: LoginDataType
  ) => {
    try {
      const response = await axios.post(backendUrl + "api/user/login", data);
      if (response.data.success) {
        setToken(response.data.token);
        sessionStorage.setItem("token", response.data.token);
        toast.success("You are logged in");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/user");
    }
  }, [token]);
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
            <form
              onSubmit={handleSubmit(formSubmit)}
              className=" w-[80%] flex  justify-center h-[400px]  "
            >
              <div className="w-full flex flex-col gap-3 pt-10">
                <div className="w-full border-2  border-gray-200 h-[50px] flex items-center rounded-md">
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className="outline-none placeholder:pl-2 bg-inherit pl-2 w-full"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
                <div className="w-full border-2  border-gray-200 h-[50px] flex justify-between items-center pr-3 rounded-md">
                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    {...register("password")}
                    placeholder="Password"
                    className=" outline-none placeholder:pl-2 bg-inherit  pl-2  w-full"
                  />
                  {showPassword ? (
                    <span
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-[#39CDCC] text-[12px] cursor-pointer"
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
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}

                <div className="">
                  <p className="text-[#39CDCC] text-[12px] cursor-pointer ">
                    Forgot Password?
                  </p>
                </div>
                <div className="h-[50px] w-full bg-[#39CDCC] rounded-md flex justify-center items-center hover:bg-[#87f5f5] cursor-pointer">
                  <button type="submit" className="text-white">
                    Login
                  </button>
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
