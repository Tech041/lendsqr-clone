import { assets } from "../assets/assets";


const CeoCard = () => {
  return (
    <section className=" mt-10  h-[800px] lg:h-[600px] bg-secondary-200 flex items-center">
      <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full">
        <div className=" flex-1 w-full lg:w-auto flex justify-start items-center">
          <div className="flex ml-3 lg:ml-0 pl-10 lg:pl-0 justify-start lg:justify-center w-full">
            <div className="h-full w-[50%] pb-3">
              <img src={assets.ceo_image} alt="" className=" w-full h-full" />
            </div>
          </div>
        </div>
        <div className="flex-[2] w-full lg:w-auto flex justify-center items-center">
          <div className=" flex justify-center items-center ">
            <div className="w-[70%] flex flex-wrap ">
              <div className="">
                <div className="relative">
                  <div className="pl-5  pb-1  text-2xl lg:text-4xl font-bold text-white flex justify-center">
                    <p className="w-[90%] ">
                      Lendsqr has significantly expedited our entry into the
                      difficult but large retail lending market. Their solution
                      not only shortened the time to market but also at a
                      significantly reduced cost.
                    </p>
                  </div>
                </div>
                <div className="pl-8 lg:pl-14  text-base">
                  <p className=" mt-4 pb-1 text-white font-bold ">
                    Abubakar Suleiman
                  </p>
                  <p className=" font-normal text-primary-300  ">
                    CEO, Sterling Bank (SnapCash)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoCard;
