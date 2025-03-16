import { FcMoneyTransfer } from "react-icons/fc";
import { HiOutlineUsers } from "react-icons/hi2";
import { PiUserSwitchBold } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiDashboard } from "react-icons/tfi";
import { ImUsers } from "react-icons/im";
import { TiHomeOutline } from "react-icons/ti";
import { MdSwitchAccount } from "react-icons/md";
import { RiAccountCircle2Line } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import { MdAccountBox } from "react-icons/md";
import { GrDocumentTransfer } from "react-icons/gr";
import { VscOrganization } from "react-icons/vsc";
import { GoOrganization } from "react-icons/go";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import { MdBusinessCenter } from "react-icons/md";
import { MdCollectionsBookmark } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { MdDynamicFeed } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { useMatch } from "react-router-dom";
import { assets } from "../assets/assets";
const Sidebar = () => {
  const userMatch = useMatch("/user-details");

  const divStyle = "text-primary-200  hidden lg:block";
  const myStyle =
    "flex items-center justify-start gap-3 py-3 hover:bg-green-100 hover:border-l-4 hover:border-green-400";
  return (
    <div className=" bg-white w-[20%] lg:w-[25%] min-h-screen px-4  pt-10  ">
      <div className={myStyle}>
        <div className=" ">
          <MdAccountBalance size={30} />
        </div>
        <div className={divStyle}>Switch Organization</div>
        <div className="hidden lg:block">
          <FaChevronDown size={20} color="gray" />
        </div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <TiHomeOutline size={30} />
        </div>
        <div className={divStyle}>Dashboard</div>
      </div>
      <p className="uppercase font-semibold py-1 hidden lg:block">Customers</p>
      <div className={myStyle}>
        <div className=" ">
          <HiOutlineUsers size={30} />
        </div>
        <div className={divStyle}>Users</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <ImUsers size={30} />
        </div>
        <div className={divStyle}>Guarantors</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <FcMoneyTransfer size={30} />
        </div>
        <div className={divStyle}>Loans</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <LuLayoutDashboard size={30} />
        </div>
        <div className={divStyle}>Decison Models</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <MdDynamicFeed size={30} />
        </div>
        <div className={divStyle}>Savings</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <MdBusinessCenter size={30} />
        </div>
        <div className={divStyle}>Loan Requests</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <MdOutlineBusinessCenter size={30} />
        </div>
        <div className={divStyle}>White List</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <PiUserSwitchBold size={30} />
        </div>
        <div className={divStyle}>Karma</div>
      </div>
      <p className="uppercase font-semibold py-1 hidden lg:block">Business</p>
      <div className={myStyle}>
        <div className=" ">
          <VscOrganization size={30} />
        </div>
        <div className={divStyle}>Organization</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <GoOrganization size={30} />
        </div>
        <div className={divStyle}>Loan Products</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <MdAccountBox size={30} />
        </div>
        <div className={divStyle}>Savings Products</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <GoOrganization size={30} />
        </div>
        <div className={divStyle}>Fees and Charges</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <GrDocumentTransfer size={30} />
        </div>
        <div className={divStyle}>Transaction</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <GrServices size={30} />
        </div>
        <div className={divStyle}>Services</div>
      </div>{" "}
      <div className={myStyle}>
        <div className=" ">
          <MdSwitchAccount size={30} />
        </div>
        <div className={divStyle}>Service Account</div>
      </div>
      <div className={myStyle}>
        <div className=" ">
          <RiAccountCircle2Line size={30} />
        </div>
        <div className={divStyle}>Settlements</div>
      </div>{" "}
      <div className={myStyle}>
        <div className=" ">
          <MdCollectionsBookmark size={30} />
        </div>
        <div className={divStyle}>Reports</div>
      </div>
      <p className="uppercase font-semibold py-1 hidden lg:block">settings</p>
      <div className={myStyle}>
        <div className=" ">
          <TfiDashboard size={30} />
        </div>
        <div className={divStyle}>Preferences</div>
      </div>{" "}
      <div className={myStyle}>
        <div className=" ">
          <MdOutlinePriceChange size={30} />
        </div>
        <div className={divStyle}>Fees and Pricing</div>
      </div>{" "}
      <div className={myStyle}>
        <div className=" ">
          <FcBusinessman size={30} />
        </div>
        <div className={divStyle}>Audit Logs</div>
      </div>
      {userMatch && (
        <div className="">
          <div className={myStyle}>
            <div className=" ">
              <img src={assets.tire_icon} alt="" className="w-full h-full" />
            </div>
            <div className={divStyle}>Systems Messages</div>
          </div>
          <hr className="py-3" />
          <div className={`${myStyle} border-b-2`}>
            <div className="">
              <img src={assets.signout_icon} alt="" className="w-full h-full" />
            </div>
            <div className={divStyle}>Logout</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
