import { useState } from "react";
import Container from "./Container";
import { MdKeyboardArrowDown } from "react-icons/md";
import LendingCard from "./LendingCard";
import { assets } from "../assets/assets";

const headingStyle = "lg:py-2 lg:my-2 text-3xl lg:text-[40px] font-bold";
const myStyles = "hover:bg-gray-100 hover:cursor-pointer";
const LendingProcess = () => {
  const [selected, setSelected] = useState("Origination");
  const [dropDown, setDropDown] = useState(false);
  return (
    <section className="mt-2 mb-20 lg:mb-10  py-2 h-[1650px] lg:h-[1300px] w-full">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
          <div className="text-primary-200   mt-5 py-2 flex-1 ">
            <h2 className={headingStyle}>All the capabilities</h2>
            <h2 className={headingStyle}>you need to simplify your</h2>
            <h2 className={headingStyle}>lending process</h2>
            <div className="">
              <p className="text-primary-300 text-base lg:text-xl pt-5">
                Our robust end-to-end loan management software enables us to
                offer support throughout the entire lending lifecycle.
              </p>
            </div>
          </div>
          <div className="flex-1 h-[400px]  "></div>
        </div>
        {/* selection div */}
        <div className="hidden lg:flex justify-center items-center w-full ">
          <div className="bg-gray-100 flex justify-evenly w-full text-black my-5 py-2 px-3 rounded-md">
            <div
              onClick={() => setSelected("Origination")}
              className={`${
                selected === "Origination" &&
                "border shadow-lg rounded-md bg-white"
              } px-3 py-2 hover:cursor-pointer`}
            >
              Origination
            </div>
            <div
              onClick={() => setSelected("Decisioning")}
              className={`${
                selected === "Decisioning" &&
                "border shadow-lg rounded-md bg-white"
              } px-3 py-2 hover:cursor-pointer`}
            >
              Decisioning
            </div>
            <div
              onClick={() => setSelected("Approval")}
              className={`${
                selected === "Approval" &&
                "border shadow-lg rounded-md bg-white"
              } px-3 py-2 hover:cursor-pointer`}
            >
              Approval
            </div>
            <div
              onClick={() => setSelected("Disbursement")}
              className={`${
                selected === "Disbursement" &&
                "border shadow-lg rounded-md bg-white"
              } px-3 py-2 hover:cursor-pointer`}
            >
              Disbursement
            </div>
            <div
              onClick={() => setSelected("Collections")}
              className={`${
                selected === "Collections" &&
                "border shadow-lg rounded-md bg-white"
              } px-3 py-2 hover:cursor-pointer`}
            >
              Collections
            </div>
          </div>
        </div>
        {/* smaller devices */}
        <div className="lg:hidden py-3">
          <div className=" flex justify-between items-center rounded-md border shadow-lg bg-white px-3 hover:cursor-pointer">
            <p className="py-1">{selected || "Approval"}</p>
            <span
              onClick={() => setDropDown((prev) => !prev)}
              className={`${
                dropDown ? "rotate-180" : ""
              } transition-transform duration-700`}
            >
              <MdKeyboardArrowDown size={30} color="gray" />
            </span>
          </div>
          <div
            className={` 
            rounded-md border shadow-lg bg-white ${
              dropDown ? "hidden" : "block"
            } `}
          >
            <div className={myStyles}>
              <p
                onClick={() => setSelected("Origination")}
                className={` ${selected === "Origination"} py-2 px-3`}
              >
                Origination
              </p>
            </div>
            <div className={myStyles}>
              <p
                onClick={() => setSelected("Decisioning")}
                className={` ${selected === "Decisioning"} py-2 px-3`}
              >
                Decisioning
              </p>
            </div>

            <div className={myStyles}>
              <p
                onClick={() => setSelected("Approval")}
                className={` ${selected === "Approval"} py-2 px-3`}
              >
                Approval
              </p>
            </div>

            <div className={myStyles}>
              <p
                onClick={() => setSelected("Disbursement")}
                className={` ${selected === "Disbursement"} py-2 px-3`}
              >
                Disbursement
              </p>
            </div>

            <div className={myStyles}>
              <p
                onClick={() => setSelected("Collections")}
                className={` ${selected === "Collections"} py-2 px-3`}
              >
                Collections
              </p>
            </div>
          </div>
        </div>
        {/* Lending Card display */}
        <div className="">
          {selected === "Origination" && (
            <div className="">
              <LendingCard
                src={assets.origination_image}
                text1="origination"
                text2="We’ve digitized the entire loan origination process"
                text3="Launch your lending business effortlessly across multiple channels including web, mobile, USSD, and APIs. Our lending software solutions get your loan business up and running in 5 minutes."
                text4="Channels & Distribution"
                text5="Create and manage diverse loan products that cater exactly to what your customers want, all with our easy-to-use management tools."
                text6="Loan Product Management"
                text7="Create and manage diverse loan products that cater exactly to what your customers want, all with our easy-to-use management tools."
                text8="Savings & Investment Management"
                text9="Create and manage diverse loan products that cater exactly to what your customers want, all with our easy-to-use management tools."
              />
            </div>
          )}
          {selected === "Approval" && (
            <div className="">
              <LendingCard
                src={assets.approval_image}
                text1="approval"
                text2="Empower your loan approval process with our advanced lending software"
                text3="Choose from manual approvals, automated systems, or a combination of both to suit your operational needs and preferences. With our lending automation software, you can seamlessly manage all aspects of your operations."
                text4="Customer Management"
                text5="Take advantage for our all-in-one tool to manage all your customers efficiently and track the metrics that matter"
                text6="Automations"
                text7="Automations"
                text8="Teams"
                text9="Simplify teamwork by inviting team members and assigning specific permissions for streamlined business management."
              />
            </div>
          )}{" "}
          {selected === "Collections" && (
            <div className="">
              <LendingCard
                src={assets.collection_image}
                text1="collections"
                text2="Offer your borrowers multiple payment options"
                text3="Empower your borrowers with various payment methods. Our loan management software ensures timely loan recovery by automatically collecting payments from your borrowers' accounts via direct debit on the due dates."
                text4="Card"
                text5="Customers can make payments with their debit cards and you can also determine the type of cards you would like to accept for payment."
                text6="USSD"
                text7="Customers can fund their wallet to repay their loans, or top up savings via USSD."
                text8="Direct Debit"
                text9="Automatically collect recurring payments from a customer’s bank account with their prior authorisation. Reduce the risk of late or missed payments and offer your customers a hassle-free experience."
              />
            </div>
          )}{" "}
          {selected === "Disbursement" && (
            <div className="">
              <LendingCard
                src={assets.disbursement_image}
                text1=" disbursement"
                text2=" Control how your loans are disbursed."
                text3=" Accelerate your loan disbursement with our quick loan disbursement
              feature.Transfer funds to app wallets or bank accounts within
              seconds of approval, ensuring prompt access for your customers."
                text4="Transfer"
                text5=" Customers can transfer money to their bank accounts.
                Transactions come with PDF receipts which can be shared with
                recipients and other stakeholders, where required."
                text6=" Airtime"
                text7=" Customers can top up their own phones or phones of others on any
                telco network."
                text8=" Bills Payment"
                text9=" Customers can effortlessly settle utilities and services
                directly through our platform, making disbursement even easier."
              />
            </div>
          )}{" "}
          {selected === "Decisioning" && (
            <div className="">
              <LendingCard
                src={assets.decisioning_image}
                text1="decisioning"
                text2="Go beyond the surface to check the creditworthiness of your borrowers."
                text3="Elevate your lending process with Oraculi, our sophisticated and customizable credit decisioning and scoring engine. Achieve unparalleled accuracy and A1 efficiency in your lending decisions with our loan management platform."
                text4="Karma"
                text5="Tap into one of the largest private blacklist database of bad actors and chronic defaulters in Nigeria."
                text6="Credit Bureau"
                text7="Get real time data online for anyone from any of Nigeria’s credit bureaus. You can configure one or multiple credit bureaus to be queried at the same time."
                text8="Ecosystem"
                text9="Tap into the massive ecosystem data of borrowers within Lendsqr to make informed decisions. This is similar to credit bureau data but on steroids."
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default LendingProcess;
