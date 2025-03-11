import { assets } from "../assets/assets";

const UserPage = () => {
  return (
    <main className="w-full h-[auto] ">
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
    </main>
  );
};

export default UserPage;
