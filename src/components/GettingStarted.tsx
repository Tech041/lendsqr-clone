import { Link } from "react-router-dom";
import Container from "./Container";
import { assets } from "../assets/assets";

const GettingStarted = () => {
  return (
    <section className="bg-[#C6EBEB] h-[700px] lg:h-[350px] w-full ">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-3 pt-20">
          <div className=" flex-1">
            <h1 className="text-3xl font-semibold text-primary-200 py-2">
              Get started with Lendsqr
            </h1>
            <p className="text-primary-300 flex flex-wrap text-xl">
              Want to see first-hand how Lendsqr can push the boundaries of your
              lending business? Sign up now for free and check it out, we’ll be
              with you every step of the way
            </p>
            <div className="pt-8">
              <Link
                to={"/register"}
                className="bg-secondary-100 rounded text-white font-semibold px-6 py-3"
              >
                Create your Free Account
              </Link>
            </div>
          </div>
          <div className=" flex-1 pt-5 flex justify-center ">
            <img src={assets.start_img} alt="" className="w-[60%]  h-[80%]" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GettingStarted;
