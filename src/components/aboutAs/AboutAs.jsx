import Advantages from "../advantages/Advantages";
import Banner from "../bunner/Bunner";
import OurApproach from "../ourApproach/OurApproach";
import ServicesWeOffer from "../servicesWeOffer/ServicesWeOffer";
import WhereWeInvest from "../whereWeInvest/WhereWeInvest";

const AboutAs = () => {
  return (
    <div>
      <Banner title={"About Us"} imgUrl={"/images/about-us.png"} />
      <div style={{ display: "flex", maxHeight: "650px", maxWidth: "" }}>
        <OurApproach />
      </div>
      <div>
        <ServicesWeOffer dataCount={5} />
      </div>
      <div>
        <WhereWeInvest />
      </div>
      <div>
        <Advantages />
      </div>
    </div>
  );
};

export default AboutAs;
