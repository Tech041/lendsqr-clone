import { assets } from "../assets/assets";
import Container from "../components/Container";
import UserNavbar from "../components/UserNavbar";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { userSchema } from "../models/Schema";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/AppContext";

type userDataType = z.infer<typeof userSchema>;
const UserPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userDataType>({ resolver: zodResolver(userSchema) });

  const handleFormSubmit: SubmitHandler<userDataType> = (data) => {
    console.log("FormData", data);
  };
  const { token, navigate } = useContext(UserContext);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return (
    <main className="w-full h-[auto] bg-gray-100 pb-10">
      <Container>
        <UserNavbar />
        <div className="flex justify-between ">
          <div className=" bg-gray-300 flex-1 hidden lg:flex items-center justify-center">
            <img src={assets.loan_img} alt="" className="w-[90%] h-[70%]" />
          </div>
          <div className="flex-1  ">
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="w-full px-4 py-3 bg-white shadow-lg "
            >
              <h1 className="text-2xl font-semibold text-center py-3">
                Personal Information
              </h1>
              <div className="pt-3">
                <input
                  {...register("full_name")}
                  type="text"
                  placeholder="Enter your Full Name"
                  className="border rounded-md w-full px-4 py-2"
                />
              </div>
              {errors.full_name && (
                <p className="text-red-600">{errors.full_name.message}</p>
              )}
              <div className="pt-3">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email address"
                  className="border rounded-md w-full px-4 py-2"
                />
              </div>

              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
              <div className="pt-3">
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Enter phone number"
                  className="border rounded-md w-full px-4 py-2"
                />
              </div>

              {errors.phone && (
                <p className="text-red-600">{errors.phone.message}</p>
              )}
              <div className="pt-3">
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Residential address"
                  className="border rounded-md w-full px-4 py-2"
                />
              </div>
              {errors.address && (
                <p className="text-red-600">{errors.address.message}</p>
              )}
              <div className="pt-3">
                <input
                  {...register("bank")}
                  type="text"
                  placeholder="User's Bank Name"
                  className="border rounded-md w-full px-4 py-2"
                />
              </div>

              {errors.bank && (
                <p className="text-red-600">{errors.bank.message}</p>
              )}
              <div className="">
                {/* wrappper */}

                <div className="pt-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
                  <div className=" w-full lg:w-[25%] ">
                    <select
                      {...register("gender")}
                      className="px-4 py-2 border rounded-md w-full"
                    >
                      <option value="male" className="">
                        Male
                      </option>
                      <option value="female" className="">
                        Female
                      </option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-600">{errors.gender.message}</p>
                    )}
                  </div>

                  <div className="w-full lg:w-[25%]">
                    <select
                      {...register("marital_status")}
                      className="border rounded-md  w-full px-4 py-2"
                    >
                      <option value="single" className="">
                        Single
                      </option>
                      <option value="married" className="">
                        Married
                      </option>
                    </select>
                    {errors.marital_status && (
                      <p className="text-red-600">
                        {errors.marital_status.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full lg:w-[40%] ">
                    <input
                      {...register("bvn")}
                      type="tel"
                      placeholder="BVN"
                      className="border w-full rounded-md px-4 py-2"
                    />
                    {errors.bvn && (
                      <p className="text-red-600">{errors.bvn.message}</p>
                    )}
                  </div>
                </div>
              </div>
              <h1 className="text-2xl font-semibold text-center py-3">
                Education and Employment
              </h1>
              <div className="pt-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Employment Status</h2>
                  <div className="">
                    <select
                      {...register("employment_status")}
                      className="border rounded-md  w-full px-4 py-2"
                    >
                      <option value="employee" className="">
                        Employee
                      </option>
                      <option value="employer" className="">
                        Employer
                      </option>
                    </select>
                    {errors.employment_status && (
                      <p className="text-red-600">
                        {errors.employment_status.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-1 ">
                  <h2 className="">Sector of Employment</h2>
                  <div className="">
                    <select
                      {...register("sector")}
                      className="border rounded-md  w-full px-4 py-2"
                    >
                      <option value="Fintech" className="">
                        Fintech
                      </option>
                      <option value="Academia" className="">
                        Academia
                      </option>
                      <option value="Oil" className="">
                        Oil
                      </option>{" "}
                      <option value="Telecoms" className="">
                        Telecoms
                      </option>
                      <option value="Others" className="">
                        Others
                      </option>
                    </select>
                    {errors.sector && (
                      <p className="text-red-600">{errors.sector.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Level of Education</h2>
                  <div className="">
                    <select
                      {...register("level")}
                      className="border rounded-md  w-full px-4 py-2"
                    >
                      <option value="HND" className="">
                        HND
                      </option>
                      <option value="B.Sc" className="">
                        B.Sc
                      </option>
                      <option value="B.A" className="">
                        B.A
                      </option>
                      <option value="PhD" className="">
                        PhD
                      </option>
                      <option value="Others" className="">
                        Others
                      </option>
                    </select>
                    {errors.level && (
                      <p className="text-red-600">{errors.level.message}</p>
                    )}
                  </div>
                </div>
              </div>
              {/* second row under education/employment */}
              <div className="pt-3 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">
                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Office Email</h2>
                  <div className="">
                    <input
                      {...register("office_email")}
                      type="email"
                      placeholder="Office Email"
                      className="border rounded-md w-full px-4 py-2"
                    />
                    {errors.office_email && (
                      <p className="text-red-600">
                        {errors.office_email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Monthly Income</h2>
                  <div className="">
                    <input
                      {...register("income")}
                      type="tel"
                      placeholder="Income.."
                      className="border rounded-md w-full px-4 py-2"
                    />
                    {errors.income && (
                      <p className="text-red-600">{errors.income.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Duration of Employment</h2>
                  <div className="">
                    <select
                      {...register("duration")}
                      className="border rounded-md  w-full px-4 py-2"
                    >
                      <option value="0-1yr" className="">
                        0-1 yr
                      </option>
                      <option value="2-5yrs" className="">
                        2-5yrs
                      </option>
                      <option value="6-10yrs" className="">
                        6-10yrs
                      </option>
                      <option value="11yrs+" className="">
                        11yrs+
                      </option>
                    </select>
                    {errors.duration && (
                      <p className="text-red-600">{errors.duration.message}</p>
                    )}
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
                      {...register("twitter")}
                      type="text"
                      placeholder="X Handle"
                      className="border rounded-md w-full px-4 py-2"
                    />
                    {errors.twitter && (
                      <p className="text-red-600">{errors.twitter.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Facebook</h2>
                  <div className="">
                    <input
                      {...register("facebook")}
                      type="text"
                      placeholder="Username"
                      className="border rounded-md w-full px-4 py-2"
                    />
                    {errors.facebook && (
                      <p className="text-red-600">{errors.facebook.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col lg:flex-1">
                  <h2 className="">Instagram</h2>
                  <div className="">
                    <input
                      {...register("instagram")}
                      type="text"
                      placeholder="IG Handle"
                      className="border rounded-md w-full px-4 py-2"
                    />
                    {errors.instagram && (
                      <p className="text-red-600">{errors.instagram.message}</p>
                    )}
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
                      {...register("guarantor_name")}
                      type="text"
                      placeholder="Guarantor's Full Name"
                      className="border rounded-md w-full px-4 py-2"
                    />
                    {errors.guarantor_name && (
                      <p className="text-red-600">
                        {errors.guarantor_name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <h2 className="">Phone Number</h2>
                  <div className="">
                    <input
                      {...register("guarantor_phone")}
                      type="tel"
                      placeholder="Mobile"
                      className="border rounded-md w-full px-4 py-2"
                    />
                    {errors.guarantor_phone && (
                      <p className="text-red-600">
                        {errors.guarantor_phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col ">
                  <h2 className="">Email</h2>
                  <div className="">
                    <input
                      {...register("guarantor_email")}
                      type="email"
                      placeholder="Email address"
                      className="border rounded-md w-full px-4 py-2"
                    />
                    {errors.guarantor_email && (
                      <p className="text-red-600">
                        {errors.guarantor_email.message}
                      </p>
                    )}{" "}
                  </div>
                </div>
                <div className="flex flex-col ">
                  <h2 className="">Relationship</h2>
                  <div className="">
                    <input
                      {...register("relationship")}
                      type="text"
                      placeholder="Relationship"
                      className="border rounded-md w-full px-4 py-2"
                    />

                    {errors.relationship && (
                      <p className="text-red-600">
                        {errors.relationship.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className=" flex items-center justify-center py-3">
                <button
                  type="submit"
                  className="text-white  font-semibold px-4 py-2 bg-blue-600 rounded-lg w-[50%] "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default UserPage;
