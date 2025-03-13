import { assets } from "../assets/assets";
import Container from "./Container";

import NoticeCard from "./NoticeCard";

const Notice = () => {
  return (
    <section className="mt-10 py-10">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center ">
          {/* left */}
          <div className="flex-1 ">
            <div className="">
              <p className="font-semibold text-secondary-100 uppercase">
                everything you need to keep going
              </p>
              <h1 className="flex flex-wrap text-2xl lg:text-4xl text-[#13367D] font-semibold mt-2 pt-2">
                Empower your loan business with Lendsqr
              </h1>
              <p className="text-primary-300 text-xl py-3 mt-2">
                Lendsqr is the only powerhouse you need to drive your loan
                business. Our end-to-end digital lending software integrates all
                the features you need to run your loan operations smoothly.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="flex-1 "></div>
        </div>
        <div className="">
          {/* card section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4">
            <NoticeCard
              src={assets.resources_image}
              text1="BACK OFFICE"
              text2="All-in-one loan management tool empowered to drive business growth"
              text3="Manage all your resources on our robust back office, dedicated to provide you al you need to make the most of your operations. From dashboards, product management to reporting, you never miss a beat."
              text4="Learn more about our Back Office"
            />
            <NoticeCard
              src={assets.notice_img}
              text1="integrations"
              text2="Seamless multiple integrations ensuring you're always at 100%"
              text3="Lendsqr is the only powerhouse you need to drive your lending business. We have all our features integrated into everything you need to run smoothly."
              text4="Learn more about Integrations"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Notice;
