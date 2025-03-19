import axios from "axios";
import { assets } from "../assets/assets";
import Container from "../components/Container";
import Sidebar from "../components/Sidebar";
import UserCard from "../components/UserCard";
import UserDetails, { UserDetailsProp } from "../components/UserDetails";
import UserNavbar from "../components/UserNavbar";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/AppContext";

const Dashboard = () => {
  const { userDetails, setUserDetails, backendUrl } = useContext(UserContext);
  const getAllUserDetails = async () => {
    const response = await axios.get(backendUrl + "api/user/all-users", {});
    if (response.data.success) {
      console.log(response.data);
      setUserDetails(response.data.usersDetails);
    }
  };
  useEffect(() => {
    getAllUserDetails();
    console.log("User deatils are :", userDetails);
  }, []);
  return (
    <main className="w-full h-full bg-white pb-10">
      <Container>
        <UserNavbar />
        <div className="flex min-h-screen">
          <Sidebar />
          <div className=" bg-gray-50/50 w-[75%] h-full px-4 pt-5  ">
            <h1 className="px-4 font-semibold py-1">USERS</h1>
            <div className="flex  flex-col lg:flex-row lg:justify-between gap-2 py-2 ">
              {/* card */}
              <UserCard
                src={assets.icon_2}
                text="USERS"
                value={userDetails.length}
              />
              <UserCard
                src={assets.icon_2}
                text="ACTIVE USERS"
                value={userDetails.length}
              />
              <UserCard
                src={assets.icon_4}
                text="USERS WITH LOANS"
                value={userDetails.length}
              />
              <UserCard
                src={assets.icon_3}
                text="USERS WITH SAVINGS"
                value={userDetails.length}
              />
            </div>

            {/* user data table */}
            <div className="overflow-x-auto p-4 mt-6 bg-white rounded-md">
              <table className="min-w-full border-collapse  ">
                <thead>
                  <tr className="border-b">
                    <th className="  px-4 py-2 capitalize  ">Organization</th>
                    <th className="  px-4 py-2 capitalize">full name</th>
                    <th className="  px-4 py-2 capitalize">email</th>
                    <th className=" px-4 py-2 capitalize ">status</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails.map((user: UserDetailsProp) => (
                    <UserDetails
                      key={user.email}
                      sector={user.sector}
                      full_name={user.full_name}
                      email={user.email}
                      level={user.level}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-2  items-center justify-end px-3 pt-3">
              <span className="text-2xl font-extrabold text-blue-400 ">
                {"<"}
              </span>
              {[1, 2, 3].map((numb, index) => (
                <div
                  key={index}
                  className="px-3 py-1 text-white bg-blue-500 rounded-lg"
                >
                  {numb}
                </div>
              ))}
              <span className="text-2xl font-extrabold text-blue-400 hover:cursor-pointer">
                {">"}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Dashboard;
