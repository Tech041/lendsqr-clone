import { assets } from "../assets/assets";

const LendingCard = () => {
  return (
    <div className="my-5 py-5">
      {/* wrapper div */}
      <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center h-[600px]">
        <div className="flex-1 flex justify-center items-center  h-full">
          <img
            src={assets.disbursement_image}
            width={400}
            height={300}
            alt=""
            className="w-[400px] h-[300px]"
          />
        </div>
        <div className="flex-1  h-full">
          <div className="mt-10 pt-10">
            <h3 className="capitalize my-2 py-2 text-lg  text-secondary-100">
              disbursement
            </h3>
            <h1 className="text-base lg:text-3xl text-primary-200 font-semibold">
              Control how your loans are disbursed.
            </h1>
            <p className="my-2 py-2 text-primary-300">
              Accelerate your loan disbursement with our quick loan disbursement
              feature. Transfer funds to app wallets or bank accounts within
              seconds of approval, ensuring prompt access for your customers.
            </p>
            <div className="">
              <h2 className="my-2 py-2 text-lg font-semibold text-black">
                Transfer
              </h2>
              <p className=" text-primary-300">
                Customers can transfer money to their bank accounts.
                Transactions come with PDF receipts which can be shared with
                recipients and other stakeholders, where required.
              </p>
            </div>
            <hr className="w-full my-2 py-2" />
            <div className="">
              <h2 className="my-2 py-2 text-lg font-semibold text-black">
                Airtime
              </h2>
              <p className=" text-primary-300">
                Customers can top up their own phones or phones of others on any
                telco network.
              </p>
            </div>
            <hr className="w-full my-2 py-2" />
            <div className="">
              <h2 className="my-2 py-2 text-lg font-semibold text-black">
                Bills Payment
              </h2>
              <p className=" text-primary-300">
                Customers can effortlessly settle utilities and services
                directly through our platform, making disbursement even easier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendingCard;
