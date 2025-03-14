import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-[#161A1D]">
      <Container>
        <div className="pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 text-white">
            <div className="">
              <p className="py-3">Nigeria</p>
            </div>
            <div className="">
              <p className="py-3">Solutions</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <Link to={"#"}>Start</Link>
                <Link to={"#"}>Scale</Link>
                <Link to={"#"}>For Banks</Link>
                <Link to={"#"}>For Fintech</Link>
                <Link to={"#"}>For Microfinance Institutions</Link>
                <Link to={"#"}>SMEs</Link>
                <Link to={"#"}>For Human Resources</Link>
              </div>
            </div>
            <div className="">
              <p className="py-3">Products</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <Link to={"#"}>Pricing</Link>
                <Link to={"#"}>How to Use</Link>
                <Link to={"#"}>Channels</Link>
                <Link to={"#"}>Back Office</Link>
                <Link to={"#"}>Loan Product Management</Link>
                <Link to={"#"}>Savings and Investments</Link>
                <Link to={"#"}>Payments and Collections</Link>
              </div>
            </div>
            <div className="">
              <p className="py-3">Resources</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <Link to={"#"}>Blog</Link>
                <Link to={"#"}>Help Center</Link>
                <Link to={"#"}>Develpers</Link>
                <Link to={"#"}>Case Studies</Link>
                <Link to={"#"}>Discover Providers</Link>
                <Link to={"#"}>Discover Lenders</Link>
                <Link to={"#"}>Discover Loans</Link>
              </div>
            </div>
            <div className="">
              <p className="py-3">Company</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <Link to={"#"}>About Lendsqr</Link>
                <Link to={"#"}>Careers</Link>
                <Link to={"#"}>Changelog</Link>
              </div>
            </div>
          </div>
          <hr className="text-gray-500 my-10 py-5" />
        </div>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 text-white">
            <div className="">
              <p className="py-3">Contact</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <Link to={"#"}>support@example.com</Link>
              </div>
            </div>
            <div className="">
              <p className="py-3">United States</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <p>2055 Limestone Rd Ster</p>
                <p>200C, Wilmington, DE 19808</p>
              </div>
            </div>
            <div className="">
              <p className="py-3">United Kingdom</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <p>17 King Edwards Road,</p>
                <p>Ruislip, London, HA4 7AE 8</p>
              </div>
            </div>
            <div className="">
              <p className="py-3">Nigeria</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <p>4 Perez Drive, Lekki Phase 1,</p>
                <p>Lagos 106104</p>
              </div>
            </div>
            <div className="">
              <p className="py-3">Caribbean</p>
              <div className="flex flex-col gap-2 text-gray-400">
                <p>C/O Si Caribbean Ltd., Level</p>
                <p>2, Invaders Bay Tower,</p>
                <p className="">Invaders Bay, Port of Spain,</p>
                <p className="">Trinidad W.I.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1 flex items-center ">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Lendsqr, Inc. All rights
              reserved
            </p>
          </div>
          <div className="flex-1 text-gray-400 flex justify-start items-center md:justify-end text-xs gap-3 ">
            <p className="capitalize underline">Privacy Policy</p>
            <p className="Terms of Use underline">Privacy policy</p>
          </div>
        </div>
        <div className="text-gray-400 text-xs pt-5 pb-10">
          <p className="flex flex-wrap ">
            Lendersqr.com is NOT a lender,does not make offers for loans and
            does not broker online loans to lenders or lending partners.
            Lendsqr.com is not representative or agent of any lender or lending
            partner.
          </p>
          <p className="flex flex-wrap">
            Lendsqr.com is a lending-as-a-service cloud platform for licensed
            lenders. These disclosures ar intended for informationl purposes
            only and should not be construed as or considered legal advice.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
