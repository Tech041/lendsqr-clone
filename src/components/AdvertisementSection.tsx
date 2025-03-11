import Advertisement from "./Advertisement";
import Container from "./Container";

const AdvertisementSection = () => {
  return (
    <section className="mt-4 pt-2">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-5 pb-5">
          <div className="">
            <Advertisement
              text1="Quick Integration."
              text2=" Set up your lending business with time-saving integration.

"
            />
          </div>
          <div className="">
            <Advertisement
              text1="Automated Processing."
              text2=" Real-time automation to optimize your business.

"
            />
          </div>
          <div className="">
            <Advertisement
              text1="Fully Customizable"
              text2="  Choose from powerful features that work for your business."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdvertisementSection;
